import { PaginationButton, PaginationNavButton } from "../resuable/button";
import { PaginationLayout } from "./assets/style";

interface PaginationType {
  pageCount: number,
  currentPage: number,
  onPageChange: (page: number) => void
}

export const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationType) => {

  if (pageCount < 2) {
    return null;
  }

  const arr: number[] = []
  for (let index = 1; index <= pageCount; index++) {
    arr.push(index);
  }

  return (
    <PaginationLayout>
      <PaginationNavButton
        key={'prev_button'}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img src="https://img.icons8.com/material-rounded/24/000000/chevron-left.png" alt="" />
      </PaginationNavButton>
      {
        arr.map((value) => {
          return (
            <PaginationButton
              key={value}
              text={`${value}`}
              onClick={() => onPageChange(value)}
              isActive={currentPage === value}
            />
          )
        })
      }
      <PaginationNavButton
        key={'prev_button'}
        onClick={() => onPageChange(currentPage + 1)}
        rotate={true}
      >
        <img src="https://img.icons8.com/material-rounded/24/000000/chevron-left.png" alt="" />
      </PaginationNavButton>
    </PaginationLayout>
  )
}