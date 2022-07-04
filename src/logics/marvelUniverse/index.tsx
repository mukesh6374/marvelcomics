import React, { useMemo, useState } from "react";
import { GetAllCharacters, GetAllComics, GetComicsByCharacterId } from "./api";
import { MarvelUniverseProvider } from "./context";

interface MarvelUniverseType {
    children: React.ReactNode
}

export const MarvelUniverse = ({
    children
}: MarvelUniverseType) => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacterIds, setSelectedCharacterIds] = useState<number[]>([])
    const [selectedCharacterNames, setSelectedCharacterNames]  = useState<string[]>([]);
    const [comics, setComics] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [comicsToRender, setComicsToRender] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState('');

    useMemo(() => {
      GetAllCharacters().then((response) => {
        if(response && response.data && response.data.results){
          setCharacters(response.data.results)
        }
      });
    },[])

    useMemo(() => {
      const getComicsById = () => {
        const allComicsResult = selectedCharacterIds.map((id) => {
          return GetComicsByCharacterId(id).then((response) => {
            if(response && response.data && response.data.results){
              return response.data.results;
            } else{
              return null;
            }
          });
        });
  
        Promise.all(allComicsResult).then((resultArray) => {
          let newComics:any = []
          resultArray.forEach((result) => {
            newComics = [...newComics, ...result]
          });
          setComics(newComics);
          let pages =  newComics.length;
          const pCount = pages >1 ? Math.ceil(pages/20): 0;
          if(pages > 1){
            setPageCount(pCount);
            setCurrentPage(1);
          } else {
            setPageCount(0);
            setCurrentPage(0);
          }
        }).catch((err)=>{
          console.error(err)
        })
      }

      if(selectedCharacterIds && selectedCharacterIds.length){
        getComicsById()
      } else {
        GetAllComics().then((response) => {
          if(response && response.data && response.data.results){
            const newComics =  response.data.results;
            setComics(newComics);
            let pages =  newComics.length;
            const pCount = pages >1 ? Math.ceil(pages/20): 0;
            if(pages > 1){
              setPageCount(pCount);
              setCurrentPage(1);
            } else {
              setPageCount(0);
              setCurrentPage(0);
            }
          } else{
            return null;
          }
        })
      }
      
    },[selectedCharacterIds])

    const onSelectCharacter = (id: number, name: string) => {
      if(selectedCharacterIds.includes(id)){
        const newSelected = selectedCharacterIds
        const newSelectedNames = selectedCharacterNames
        const index = newSelected.indexOf(id);
        if (index > -1) { // only splice array when item is found
          newSelected.splice(index, 1); // 2nd parameter means remove one item only
          setSelectedCharacterIds(newSelected)
          newSelectedNames.splice(index, 1); // 2nd parameter means remove one item only
          setSelectedCharacterNames(newSelectedNames)
        }
      } else {
        const newSelected: number[] = [...selectedCharacterIds];
        newSelected.push(id);
        setSelectedCharacterIds(newSelected);
        const newSelectedNames: string[] = [...selectedCharacterNames];
        newSelectedNames.push(name);
        setSelectedCharacterNames(newSelectedNames);
      }
    }

    const onClearAllFilters = () => {
      setSelectedCharacterIds([])
      setSelectedCharacterNames([])
    }

    useMemo(() => {
      let renderComics:any[] = []
      if(currentPage > 0){
        let start = 0;
        if(currentPage === 2){
          start =20
        } else if(currentPage > 2){
          start = currentPage *20
        }
        var end: number = (currentPage*20) -1;
        for(var i = start; i <=end && i < comics.length ; i++){
          renderComics.push(comics[i])
        }
      } else {
        renderComics = comics;
      }

      setComicsToRender(renderComics)
    }, [currentPage, comics]);

    const onPageChange = (page: number) => {
      if(page < 1 && pageCount > 1){
        setCurrentPage(1)
      } else if(page > pageCount){
        setCurrentPage(pageCount)
      } else {
        setCurrentPage(page)
      }
    }

    const onSearch = (e: { target: { value: string; }; }) => {
      try {
        let value = e.target.value;
        setSearchValue(value)
      } catch (error) {
        console.error(error) 
      }
    }

    const provideValue = {
      characters,
      comics: comicsToRender,
      selectedCharacterIds,
      selectedCharacterNames,
      onSelectCharacter,
      onClearAllFilters,
      pageCount,
      currentPage,
      onPageChange,
      searchValue,
      onSearch
    };

    return (
        <MarvelUniverseProvider value={provideValue}>
          {children}
        </MarvelUniverseProvider>
    )
}