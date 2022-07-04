import React from "react";
import { ComicsLayout, ComicsListLayout } from "./assets/style";
import { Comic } from "./comic";

interface ComicsType {
  comics: {
    id: number,
    thumbnail: {
      path: string,
      extension: string,
    },
    title: string,
    issueNumber: number
  }[]
}

export const Comics = ({
  comics
}: ComicsType) => {
  if (!(Array.isArray(comics) && comics.length)) {
    return null;
  }
console.log(comics)
  return (
    <ComicsLayout>
      <ComicsListLayout>
        {
          comics.map((comic) => {
            return (
              <Comic
                key={comic.id}
                thumbnail={comic.thumbnail}
                title={comic.title}
                issueNumber={comic.issueNumber}
              />
            )
          })
        }
      </ComicsListLayout>
    </ComicsLayout>
  )
}