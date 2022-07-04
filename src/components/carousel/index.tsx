import React from "react";
import { CarouselLayout, List, ListLayout } from "./assets/style";
import { Characters } from "./characters";

interface CarouselType {
  characters: {
    id: number,
    thumbnail: {
      path: string,
      extension: string,
    },
    name: string,
  }[],
  selectedCharacterIds: number[],
  onSelectCharacter: (id: number, name: string) => void,
}

export const Carousel = ({
  characters,
  selectedCharacterIds,
  onSelectCharacter,
}: CarouselType) => {
  if(!(Array.isArray(characters) && characters.length)){
    return null;
  }
console.log(characters, selectedCharacterIds);
  return (
    <CarouselLayout>
      <ListLayout>
        {
          characters.map((value) => {
            return (
              <List
                key={value.id}
              >
                <Characters
                  thumbnail={value.thumbnail}
                  isSelected={selectedCharacterIds.includes(value.id)}
                  onClick={() => onSelectCharacter(value.id, value.name)}
                />
              </List>
            )
          })
        }
      </ListLayout>
    </CarouselLayout>
  )
}