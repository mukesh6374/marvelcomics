import { ButtonLayout, PaginationButtonLayout } from "./assets/style";

interface ButtonType {
  text?: string,
  onClick: () => void,
  isButtonVisible?: boolean,
  maxWidth?: string,
  isActive?: boolean,
  children?: React.ReactNode,
  rotate?: boolean
}

export const Button = ({
  text,
  onClick,
  isActive,
  maxWidth,
}: ButtonType) => {
  return (
    <ButtonLayout onClick={onClick} maxWidth={maxWidth} isActive={isActive}>
      {text}
    </ButtonLayout>
  )
}

export const PaginationButton = ({
  text,
  onClick,
  isActive,
}: ButtonType) => {
  return (
    <PaginationButtonLayout onClick={onClick} isActive={isActive}>
      {text}
    </PaginationButtonLayout>
  )
}

export const PaginationNavButton = ({
  onClick,
  isActive,
  children,
  rotate,
}: ButtonType) => {
  if(rotate){
    return<PaginationButtonLayout onClick={onClick} isActive={isActive} rotate={rotate}>
    {children}
  </PaginationButtonLayout>    
  }
  return<PaginationButtonLayout onClick={onClick} isActive={isActive}>
  {children}
</PaginationButtonLayout>
}