import { MD5 } from "crypto-js";
import axios from "axios";

const createApiHash = () => {
  const hash = MD5(`${Date.now()}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_API_KEY}`)
  return hash;
}

// const customHeader = () => {
//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Referer", `${process.env.REACT_APP_REFERER}`);

//   return myHeaders
// }

export const GetAllCharacters = () => {
  const hash = createApiHash();
  const apiKey = process.env.REACT_APP_API_KEY;
  // const headers =  customHeader();
  return axios(`https://gateway.marvel.com/v1/public/characters?apikey=${apiKey}&hash=${hash}`).then(response => {
    if(response && response.data){
      return response.data;
    }
    return null;
  }).catch(error => {
    console.log('error', error);
  });
}


export const GetAllComics = () => {
  const hash = createApiHash();
  const apiKey = process.env.REACT_APP_API_KEY;
  // const headers =  customHeader();
  return axios(`https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&hash=${hash}`).then(response => {
    if(response && response.data){
      return response.data;
    }
    return null;
  }).catch(error => {
    console.log('error', error);
  });
}

export const GetComicsByCharacterId = (id: number) => {
  const hash = createApiHash();
  const apiKey = process.env.REACT_APP_API_KEY;
  // const headers = customHeader();
  return axios(`https://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${apiKey}&hash=${hash}`).then(response => {
    if(response && response.data){
      return response.data;
    }
    return null;
  }).catch(error => {
    console.log('error', error);
  });
}