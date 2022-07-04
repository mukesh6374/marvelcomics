import React from "react";
import { ImageLayout } from "./style";

interface TitleImageType {
  url?: string
}
export const TitleImage = ({
  url,
}: TitleImageType) => {
  if (!url) {
    return null
  }

  return (
    <ImageLayout
      src={url}
    />
  )
}