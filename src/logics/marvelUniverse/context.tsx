import { createContext } from "react";


export const MarvelUniverseContext = createContext({
    characters: [{
        thumbnail: {
            path: '',
            extension: '',
        },
        id: 0,
        name: '',
    }],
    comics: [{
        thumbnail: {
            path: '',
            extension: ''
        },
        id: 0,
        title: '',
        issueNumber: 0,
    }],
    selectedCharacterIds: [0],
    selectedCharacterNames: [''],
    onSelectCharacter: (id: number, name: string) => {},
    onClearAllFilters: () => {},
    pageCount: 0,
    currentPage: 0,
    onPageChange: (page: number) => {},
    searchValue: '',
    onSearch: (e: { target: { value: string}}) => {},
});

export const MarvelUniverseProvider = MarvelUniverseContext.Provider;