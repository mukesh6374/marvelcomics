import styled from "@emotion/styled";

export const ComicLayout = styled.li`
    display: flex;
    flex-direction: column;
    width: 180px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ComicImage = styled.img`
    width: 160px;
    height: 200px;
`;

export const ComicTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const ComicTitleLayout = styled.p`
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1; 
    -webkit-box-orient: vertical;
`

export const ComicIssueNumberLayout = styled.div`
    color: yellow;
    padding-left: 15px;
`;