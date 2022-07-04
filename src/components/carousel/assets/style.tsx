import styled from '@emotion/styled'

export const CarouselLayout = styled.div`
    background: #3b3a3a;
    height: 160px;
    padding-left: 200px;
    padding-right: 200px;
`

export const ListLayout = styled.ul`
    list-style-type: none;
    display: flex;
    overflow: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;
    ::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

`

export const List = styled.li`
    padding: 12px;
    cursor: pointer;
`