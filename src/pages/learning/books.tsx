import React from "react";
import styled from "styled-components";

import { Layout, Link } from "@components";
import Image from "@components/Image";

import principlesOfFlowCover from "@assets/books/principles-development-flow.png";
import headFirstCover from "@assets/books/head-first-design-patterns-cover.png";
import staffEngLeadBeyondCover from "@assets/books/staff-eng-lead-beyond.jpeg";
import techResumeInsideOut from "@assets/books/tech-resume-inside-out.jpg";
import codingCareerHandbook from "@assets/books/coding-career-handbook.jpg";
import managingHumans from "@assets/books/managing-humans.jpeg";
import engineeringMgtRestUs from "@assets/books/engineering-mgt-rest-us.jpeg";
import atomicHabits from "@assets/books/atomic-habits.jpg";
import difficultConversations from "@assets/books/difficult-conversations.jpeg";
import goodToGreat from "@assets/books/good-to-great.jpg";

const P = styled.p``;
const Figure = styled.figure`
  display: flex;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0;
`;
const Li = styled.li`
  display: inline-block;
  @media (max-width: 819px) {
    width: 100%;
  }
  @media (min-width: 820px) {
    width: calc(50% - 6px);
  }
`;
const Caption = styled.figcaption`
  margin-left: 1rem;
  color: #51234f;
`;
const BuyLink = styled(Link)`
  display: block;
`;

interface RawBookProps {
  cover: string | StaticImageData;
  width?: number;
  height?: number;
  title?: string;
  alt?: string;
  onlineLink?: string;
  localLink?: string;
}

const ratio = 166 / 250;
const defaultHeight = 125;
const defaultWidth = ratio * defaultHeight;

const RawBook = ({
  cover,
  width = defaultWidth,
  height = defaultHeight,
  title = "",
  alt = "",
  onlineLink = "",
  localLink = "",
}: RawBookProps) => (
  <Li>
    <Figure>
      {typeof cover === "string" ? (
        <Image
          src={cover}
          width={width}
          height={height}
          alt={alt || `Cover of ${title}`}
        />
      ) : (
        <Image
          {...cover}
          width={width}
          height={height}
          alt={alt || `Cover of ${title}`}
        />
      )}
      <Caption>
        {title}
        {onlineLink && <BuyLink href={onlineLink}>Buy online</BuyLink>}
        {localLink && <BuyLink href={localLink}>Buy locally</BuyLink>}
      </Caption>
    </Figure>
  </Li>
);

interface BookProps {
  isbn: string;
  title: string;
  onlineLink?: string;
  localLink?: string;
  cover?: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
}

const Book = ({
  isbn,
  title,
  cover,
  width = 166,
  height = 250,
  alt = "",
  ...props
}: BookProps) => (
  <RawBook
    {...props}
    cover={cover || `https://covers.openlibrary.org/b/isbn/${isbn}.jpg`}
    title={title}
    onlineLink={`https://bookshop.org/a/88607/${isbn}`}
    localLink={`https://www.indiebound.org/book/${isbn}?aff=reactiflux`}
  />
);

export default function Books() {
  const title = "Recommended books";
  return (
    <Layout
      title={title}
      sidebar={false}
      as={undefined}
      description="A selected list of books that were recommended by members of the community. Originally assembled by Carl Vitullo."
    >
      <h1>{title}</h1>
      <div className="markdown">
        <P>
          Most book covers courtesy of{" "}
          <Link href="https://openlibrary.org">OpenLibrary</Link>. Many of these
          are referral links, and Reactiflux will receive a small commission to
          support our operations. Buy local! Support your communities!
        </P>
        <P>
          Curated by <Link href="https://twitter.com/vcarl_">Carl Vitullo</Link>{" "}
          (aka vcarl). Recommendations sourced from the community.
        </P>
        <h1>Software Career</h1>
        <Ul>
          <RawBook
            title="The Coding Career Handbook"
            onlineLink="https://learninpublic.org/?c=REACTIFLUX30"
            cover={codingCareerHandbook}
          />
          <Book isbn="9781484260739" title="Letters to a New Developer" />
          <Book isbn="9780791861967" title="Unwritten Laws of Engineering" />
          <Book isbn="9780787960759" title="The 5 Dysfunctions of a Team" />
          <Book isbn="9780062663078" title="Multipliers" />
          <RawBook
            title="The Tech Resume Inside Out"
            onlineLink="https://thetechresume.com/"
            cover={techResumeInsideOut}
          />
          <RawBook
            title="Staff Engineer: Leadership Beyond the Management Track"
            onlineLink="https://staffeng.com/book"
            cover={staffEngLeadBeyondCover}
          />
        </Ul>
        <h1>Software Development</h1>
        <Ul>
          <Book
            isbn="9781449373320"
            title="Designing Data-Intensive Applications"
          />
          <Book
            isbn="9781492078005"
            title="Head First Design Patterns"
            cover={headFirstCover}
          />
          <Book isbn="9781788628815" title="Understanding Software" />
          <Book isbn="9780735619678" title="Code Complete" />
          <Book isbn="9780996128100" title="The Effective Engineer" />

          <RawBook
            title="The Principles of Product Development Flow"
            onlineLink={
              "https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401009?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=&linkId=132dbd1d0409bf8c34f07722a28f50c2&language=en_US&ref_=as_li_ss_tl"
            }
            cover={principlesOfFlowCover}
          />
        </Ul>
        <h1>Management</h1>
        <Ul>
          <Book isbn="9781491973899" title="Managers Path" />
          <Book
            isbn="9798986769301"
            title="Engineering Management for the Rest of Us"
            cover={engineeringMgtRestUs}
          />
          <Book isbn="9781942788294" title="Phoenix Project" />
          <Book
            isbn="9781484271155"
            title="Managing Humans"
            cover={managingHumans}
          />
          <Book isbn="9780201835953" title="The Mythical Man Month" />
          <Book isbn="9780735219564" title="The Making of a Manager" />
        </Ul>
        <h1>Personal growth</h1>
        <Ul>
          <Book
            isbn="9781471050206"
            title="Atomic Habits"
            cover={atomicHabits}
          />
          <Book
            isbn="9780143118442"
            title="Difficult Conversations"
            cover={difficultConversations}
          />
          <Book isbn="9781455586677" title="Deep Work" />
          <Book isbn="9781892005281" title="Non-Violent Communication" />
        </Ul>
        <h1>Design</h1>
        <Ul>
          <Book isbn="9780465050659" title="The Design of Everyday Things" />
        </Ul>
        <h1>Entrepreneurship</h1>
        <Ul>
          <Book
            isbn="9780066620992"
            title="Good to Great"
            cover={goodToGreat}
          />
          <Book isbn="9781591848363" title="Traction" />
        </Ul>
      </div>
    </Layout>
  );
}
