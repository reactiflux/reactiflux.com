import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { Link, Tag, Reaction } from "@components";
import { darkPink, pink } from "@utils/theme";
import { ShowMore } from "./ShowMore";

const Wrapper = styled.article`
  border-top: 2px solid ${pink};
  margin-top: 2.5rem;

  &:last-of-type {
    border-bottom: 2px solid ${pink};
    margin-bottom: 2.5rem;
  }
  p {
    margin-bottom: 0;
  }
`;
const PostBody = styled.div`
  padding-bottom: 1.75rem;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;
const Reactions = styled(Tags)``;

const GetInTouch = styled.button`
  background: none;
  border: 2px solid ${pink};
  color: ${pink};
  margin-left: 1rem;
  border-radius: 100%;
  padding: 0 0.35rem;
  cursor: pointer;
`;

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
`;
const AuthorInfo = styled.div`
  display: inline-block;
  padding: 0.75rem 0;
`;
const Avatar = styled.img`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin-right: 0.25rem;
  border-radius: 100%;
`;

const getAuthorLink = (id) => `https://discord.com/users/${id}`;

const Author = ({
  authorHref,
  messageHref,
  name,
  authorImageSrc,
  postTime,
  onInfoClick,
}) => (
  <PostAuthor>
    <Avatar src={authorImageSrc} />
    <AuthorInfo>
      <Link href={authorHref}>
        <strong>{name}</strong>
      </Link>{" "}
      on{" "}
      <Link href={messageHref}>{moment(postTime).format("MMMM Do YYYY")}</Link>
    </AuthorInfo>
    <GetInTouch onClick={onInfoClick}>ℹ</GetInTouch>
  </PostAuthor>
);

export const Offer = ({
  author,
  messageLink,
  createdAt,
  reactions,
  tags,
  description,
  onClickGetInTouch,
}) => {
  return (
    <Wrapper>
      <ShowMore>
        <Author
          authorHref={getAuthorLink(author.id)}
          name={author.displayName}
          messageHref={messageLink}
          authorImageSrc={author.avatar}
          postTime={createdAt}
          onInfoClick={onClickGetInTouch}
        />
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        {reactions.length > 0 && (
          <Reactions>
            {reactions.map(([e, c]) => (
              <Reaction key={e}>
                {e} {c}
              </Reaction>
            ))}
          </Reactions>
        )}
        <PostBody dangerouslySetInnerHTML={{ __html: description }} />
      </ShowMore>
    </Wrapper>
  );
};
