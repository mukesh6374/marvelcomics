import styled from "@emotion/styled";

type PropsType = {
    width?: string,
  }
  

export const FilterTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    max-width: 85%;
`;

export const FilterTextLayout = styled.p`
    margin: 0;
    color: white;
    width: ${(props: PropsType) => props.width || '100%'};
    
`

export const ClearFilterLayout = styled.div`
    margin: 15px 240px 10px 220px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`