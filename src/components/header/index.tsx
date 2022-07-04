import React from "react";
import { HeaderLayout } from "./assets/style";
import { Searchbar } from "./searchbar";
import { TitleImage } from "./title";


interface HeaderType {
  searchValue: string,
  onSearch: (e: { target: { value: string; }; }) => void,
}

export const Header = ({
  searchValue,
  onSearch,
}: HeaderType) => {
  return (
    <HeaderLayout>
      <TitleImage
        url={'https://i.annihil.us/u/prod/misc/marvel.svg'}
      />
      <Searchbar
        searchValue={searchValue}
        onSearch={onSearch}
      />
    </HeaderLayout>
  )
}