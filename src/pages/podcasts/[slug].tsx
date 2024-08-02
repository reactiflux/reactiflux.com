import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { type RootTranscript } from "@utils/transcript-types";

const getTranscript = (slug: Slug) => {
  return fetch("/podcastassets/2024-06.json").then((response) =>
    response.json(),
  );
};

const getAudio = (slug: Slug) => {
  return fetch(`/podcastassets/2024-06.m4a`).then((response) =>
    response.blob(),
  );
};

const m4a = z.any(z.instanceof(File));

type Slug = `${number}-${number}`;

export default function PodPage() {
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

  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastClickedTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const currentAudioTime = audioRef.current.currentTime;
        setCurrentTime(currentAudioTime);
      }
    }, 250);
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
  }, [currentTime, alignment]);

  useEffect(() => {
    (async () => {
      const [transcriptFetch, audioFetch] = await Promise.allSettled([
        getTranscript("24-06"),
        getAudio("24-06"),
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

        const audioBlob = audioFetch.value;
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);

        setLoading(false);
      }
    })();
  }, []);

  const entire_transcript = transcript?.transcripts
    ?.at(0)
    ?.timeline?.superTau?.taus?.at(0)?.text?.string;

  useEffect(() => {
    const paragraphIndex = paragraphRefs.current.findIndex(
      (ref) => ref && ref.contains(wordRefs.current[currentIndex]),
    );
    if (paragraphIndex !== -1 && paragraphRefs.current[paragraphIndex]) {
      paragraphRefs.current[paragraphIndex]?.scrollIntoView({
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

  if (loading || typeof entire_transcript === "undefined") {
    return <div>Loading...</div>;
  }

  let wordCounter = 0;
  let paragraphCounter = 0;
  let lastSpeakerId = "";

  const paragraphs = entire_transcript.split("\n").map((line, lineIndex) => {
    if (lineIndex > 0) {
      wordCounter -= 2;
    }
    const currentSpeakerId = alignment[wordCounter]?.speaker?.speakerId || "";

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

    const paragraph = (
      <div key={`paragraph-${lineIndex}`}>
        {currentSpeakerId && currentSpeakerId !== lastSpeakerId && (
          <div
            key={`speaker-${lineIndex}`}
            style={{
              fontWeight: "bold",
              marginTop: "2rem",
              color: speakers[currentSpeakerId]?.color,
            }}
          >
            {speakers[currentSpeakerId]?.name}
          </div>
        )}
        {paragraphContent}
      </div>
    );

    lastSpeakerId = currentSpeakerId;

    if (lineIndex < entire_transcript.split("\n").length - 1) {
      wordCounter++;
    }

    return paragraph;
  });

  const checkblob = z.string().safeParse(audioSrc);
  if (checkblob.error) {
    return <div>Error with audio</div>;
  }

  return (
    <div style={{ display: "flex", margin: "auto", width: "100vw" }}>
      <div style={{ position: "fixed", left: "150px", top: "50px" }}>
        <audio ref={audioRef} controls src={audioSrc as string}></audio>
      </div>

      <div
        style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
      >
        {paragraphs}
      </div>
    </div>
  );
}
