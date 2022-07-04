import styled from "@emotion/styled";

type ButtonType = {
  maxWidth?: string,
  isActive?: boolean,
  rotate?: boolean,
}

export const ButtonLayout = styled.button`
  max-width: ${(props: ButtonType) => props.maxWidth || '100%'};
  background-color: ${(props: ButtonType) => props.isActive ? 'black' : 'white'};
  border: none;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
`;

export const PaginationButtonLayout = styled.button`
  max-width: ${(props: ButtonType) => props.maxWidth || '100%'};
  ${(props: ButtonType) => props.isActive ? 'color: #ff0000cc; border-color: #ff0000cc;' : 'border: none; color: black;'};
  padding: 4px;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
  ${(props: ButtonType) => props.rotate ? 'transform: rotate(180deg);' : ''};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

