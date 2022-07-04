import React from "react";
import { TickIcon } from "./assets/icon";
import { CharacterCard, CharacterImage } from './assets/style';

interface CharactersType {
  thumbnail: {
    path: string,
    extension: string,
  },
  isSelected?: boolean,
  onClick?: () => void
}

export const Characters = ({
  thumbnail,
  isSelected,
  onClick,
}: CharactersType) => {
  const url = `${thumbnail.path}.${thumbnail.extension}`;
  if(!url){
    return null;
  }
  
  return (
    <CharacterCard onClick={onClick}>
      <CharacterImage
        src={url}
        alt=""
      />
      {
        isSelected && (
          <TickIcon />
        )
      }
    </CharacterCard>
  )
}