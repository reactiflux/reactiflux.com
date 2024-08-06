import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { type RootTranscript } from "@utils/transcript-types";
import { useRouter } from "next/router";
import { Layout } from "@components";

const getNestedProperty = <T extends any>(
  obj: any,
  path: Array<string | number>,
): T | null => {
  return path.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
    obj,
  ) as T | null;
};

// TODO: Fix the links to actually point to the real place
const getTranscript = async (slug: Slug) => {
  // const resp = await fetch(`https://something.com/${slug}.json`);
  const resp = await fetch(
    "https://d1d3n03t5zntha.cloudfront.net/106d7fc0-ae1b-4b25-90c6-490187bb4b2c/document-42b597473660461ab29e22ee964133e6.json",
  );
  const isJson = z.any(z.instanceof(File)).safeParse(resp);
  if (resp.ok && isJson.success) return await isJson.data.json();
  return { error: resp.status, valid: isJson.success };
};

const getAudio = async (slug: Slug) => {
  // const resp = await fetch(`https://something.com/${slug}.m4a`);
  const resp = await fetch(`/original.m4a`);

  if (resp.ok) return await resp.blob();
};

const m4a = z.any(z.instanceof(File));

type Slug = `${number}-${number}`;

export const getStaticProps = (t: { params: { slug: Slug } }) => {
  console.log(t);

  return {
    props: {
      slug: t.params.slug,
    },
  };
};

export default function PodPage({ slug }: { slug: Slug }) {
  console.log(slug);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transcript, setTranscript] = useState<RootTranscript | null>(null);
  const [alignment, setAlignment] = useState<
    RootTranscript["mediaLibrary"]["mediaRefs"][0]["voiceover"]["metadata"]["alignment"]
  >([]);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [speakers, setSpeakers] = useState<{
    [key: string]: { name: string; color: string };
  }>({});
  const [markers, setMarkers] = useState<
    { id: string; location: number; text: string }[]
  >([]);

  const router = useRouter();

  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastClickedTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const currentAudioTime = audioRef.current.currentTime;
        setCurrentTime(currentAudioTime);
      }
    }, 175);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (
      alignment.length > 0 &&
      currentIndex < alignment.length - 1 &&
      currentTime >= alignment[currentIndex + 1].startTime
    ) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentTime, alignment, currentIndex]);

  useEffect(() => {
    if (alignment.length > 0) {
      const newIndex = alignment.findIndex(
        (align) => align.startTime > currentTime,
      );
      if (newIndex !== -1 && newIndex - 1 !== currentIndex) {
        setCurrentIndex(newIndex - 1);
      }
    }
  }, [currentTime, alignment, currentIndex]);

  useEffect(() => {
    (async () => {
      const [transcriptFetch, audioFetch] = await Promise.allSettled([
        getTranscript(slug),
        getAudio(slug),
      ]);

      if (
        transcriptFetch.status === "fulfilled" &&
        audioFetch.status === "fulfilled"
      ) {
        const transcriptData = transcriptFetch.value as RootTranscript;
        setTranscript(transcriptData);

        const alignmentData =
          transcriptData.mediaLibrary.mediaRefs[0].voiceover.metadata.alignment;
        setAlignment(alignmentData);

        const speakerData = transcriptData.voices.reduce(
          (acc, speaker) => ({
            ...acc,
            [speaker.id]: { name: speaker.name, color: speaker.color },
          }),
          {},
        );
        setSpeakers(speakerData);

        const markerData =
          transcriptData.compositions[0].timeline.noAudioTrack.components
            .filter((component) => component.type === "markerComponent")
            .map((marker) => ({
              id: marker.id,
              location: marker.tauAnchor.location,
              text: marker.text,
            }));
        setMarkers(markerData);

        const audioBlob = audioFetch.value;
        console.log(audioBlob);

        if (audioBlob == undefined) {
          setLoading(false);
          router.push("/");
          return;
        }
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);

        setLoading(false);
      }
    })();
  }, [router, slug]);

  const transcriptPath = [
    "transcripts",
    0,
    "timeline",
    "superTau",
    "taus",
    0,
    "text",
    "string",
  ];
  const entire_transcript = getNestedProperty(
    transcript,
    transcriptPath,
  ) as string;

  useEffect(() => {
    const currentWordRef = wordRefs.current[currentIndex];
    if (currentWordRef) {
      currentWordRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentIndex]);

  const handleWordClick = (startTime: number, wordIndex: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = startTime;
      setCurrentIndex(wordIndex);
      lastClickedTimeRef.current = startTime;
    }
  };

  useEffect(() => {
    const handleSpacebarPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && audioRef.current) {
        event.preventDefault();
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    };

    window.addEventListener("keydown", handleSpacebarPress);
    return () => {
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, []);

  if (loading || typeof entire_transcript === "undefined") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "24px",
          color: "#555",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  let wordCounter = 0;
  let paragraphCounter = 0;
  let lastSpeakerId = "";

  const paragraphs = entire_transcript.split("\n").map((line, lineIndex) => {
    if (lineIndex > 0) {
      wordCounter -= 2;
    }
    const currentSpeakerId = alignment[wordCounter]?.speaker?.speakerId || "";

    const paragraphElements = [];

    if (currentSpeakerId && currentSpeakerId !== lastSpeakerId) {
      paragraphElements.push(
        <div
          key={`speaker-${lineIndex}`}
          style={{
            fontWeight: "bold",
            marginTop: "2rem",
            color: speakers[currentSpeakerId]?.color,
          }}
        >
          {speakers[currentSpeakerId]?.name}
        </div>,
      );
      lastSpeakerId = currentSpeakerId;
    }

    markers.forEach((marker) => {
      if (marker.location <= wordCounter) {
        paragraphElements.push(
          <div
            key={`marker-${marker.id}`}
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#FFD700",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            {marker.text}
          </div>,
        );
        markers.splice(markers.indexOf(marker), 1);
      }
    });

    const paragraphContent = (
      <p
        key={lineIndex}
        ref={(el) => (paragraphRefs.current[paragraphCounter++] = el)}
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        {line.split(" ").map((word, wordIndex) => {
          const currentWordIndex = wordCounter++;
          const ref = (el: HTMLSpanElement | null) => {
            wordRefs.current[currentWordIndex] = el;
          };
          const isCurrentWord =
            currentIndex === currentWordIndex &&
            alignment[currentIndex]?.word.toLowerCase() === word.toLowerCase();

          return (
            <span
              key={currentWordIndex}
              ref={ref}
              onClick={() =>
                handleWordClick(
                  alignment[currentWordIndex].startTime,
                  currentWordIndex,
                )
              }
              style={{
                backgroundColor: isCurrentWord ? "yellow" : "transparent",
                cursor: "pointer",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </p>
    );

    paragraphElements.push(paragraphContent);

    if (lineIndex < entire_transcript.split("\n").length - 1) {
      wordCounter++;
    }

    return <div key={`paragraph-${lineIndex}`}>{paragraphElements}</div>;
  });

  const checkblob = z.string().safeParse(audioSrc);
  if (checkblob.error) {
    return <div>Error with audio</div>;
  }

  return (
    <Layout
      title={`Podcast: ${slug}`}
      description={"Audio podcast with transcript"}
      as={undefined}
      sidebar
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "20px",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#333",
            marginBottom: "100px",
          }}
        >
          {paragraphs}
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "16px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            border: "2px solid #ececec",
          }}
        >
          <audio
            ref={audioRef}
            controls
            src={audioSrc as string}
            style={{ width: "100%" }}
          ></audio>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const slugs = [{ slug: "24-06" }]; // TODO: Dynamically get available slugs/podcasts
  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};
