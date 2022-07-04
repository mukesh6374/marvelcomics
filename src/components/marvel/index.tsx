import React, { useContext } from "react";
import { MarvelUniverseContext } from "../../logics/marvelUniverse/context";
import { Carousel } from "../carousel";
import { Comics } from "../comics";
import { Filter } from "../filter";
import { Header } from "../header";
import { Pagination } from "../pagination";


export const Marvel = () => {
  const marvelContext = useContext(MarvelUniverseContext);
  const {
    pageCount,
    currentPage,
    comics,
    searchValue,
    characters,
    selectedCharacterIds,
    selectedCharacterNames,
    onSelectCharacter,
    onSearch,
    onClearAllFilters,
    onPageChange,
  } = marvelContext;
  return (
    <>
      <Header
        searchValue={searchValue}
        onSearch={onSearch}
      />
      <Carousel
        characters={characters}
        selectedCharacterIds={selectedCharacterIds}
        onSelectCharacter={onSelectCharacter}
      />
      <Filter
        selectedCharacterNames={selectedCharacterNames}
        onClearAllFilters={onClearAllFilters}
      />
      <Comics
        comics={comics}
      />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  )
}