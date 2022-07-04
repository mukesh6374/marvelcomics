import React from "react";
import { ComicImage, ComicIssueNumberLayout, ComicLayout, ComicTitleContainer, ComicTitleLayout } from "./assets/style";

interface ComicType {
  thumbnail: {
    path: string,
    extension: string,
  },
  title: string,
  issueNumber: number,
}

interface ComicTitleType {
  text: string,
  issueNumber: string,
}

const ComicTitle = ({
  text,
  issueNumber,
}: ComicTitleType) => {
  const title = text && text.split('#');
  return (
    <ComicTitleContainer>
      <ComicTitleLayout>{title[0]}</ComicTitleLayout>
      <ComicIssueNumberLayout>{issueNumber}</ComicIssueNumberLayout>
    </ComicTitleContainer>
  )
}

export const Comic = ({
  thumbnail,
  title,
  issueNumber,
}: ComicType) => {
  const url = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <ComicLayout>
      <ComicImage
        src={url}
      />
      <ComicTitle
        text={title}
        issueNumber={`#${issueNumber}`}
      />
    </ComicLayout>
  )
}
