import React from "react";
import { InputFieldIcon, InputFieldLayout, InputFieldContainer } from "./assets/style";

interface InputFieldType {
  searchIcon: string,
  searchValue: string,
  onSearch: (e: { target: { value: string; }; }) => void,
}

export const InputField = ({
  searchIcon,
  searchValue,
  onSearch,
}: InputFieldType) => {
  return (
    <InputFieldContainer>
      <InputFieldIcon
        src={searchIcon}
      />
      <InputFieldLayout
        placeholder="Search marvel comics"
        value={searchValue}
        onChange={onSearch}
      />
    </InputFieldContainer>
  )
}