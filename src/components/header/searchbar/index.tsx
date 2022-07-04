import React from "react";
import { InputField } from "../../resuable/inputField";
import { SearchLayout } from "./assets/style";

interface SearchbarType {
  searchValue: string,
  onSearch: (e: { target: { value: string; };}) => void,
}

export const Searchbar = ({
  searchValue,
  onSearch
}: SearchbarType) => {
  return (
    <SearchLayout>
      <InputField
        searchIcon={'https://img.icons8.com/ios-glyphs/30/000000/search--v1.png'}
        searchValue={searchValue}
        onSearch={onSearch}
      />
    </SearchLayout>
  )
}