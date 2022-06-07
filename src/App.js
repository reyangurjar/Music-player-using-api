import { useEffect, useState } from 'react';
import React from 'react';
import './index.css';

import searchIcon from './search.svg'
import Card from './Card'

// 5b7001ce
const API_URL = `https://youtube-search-and-download.p.rapidapi.com/search`

export const fetchaudio = async (videoId) => {
  const response = await fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`,
    options)
  const data = await response.json()
  console.log(data)

}


export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '19a3a6b14cmsheb46c5a0934bfd2p14a76djsne9cbfe6f7dec'
  }
};


function App() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const searchYoutube = async (title) => {
    const response = await fetch(`${API_URL}?query=${title}&type=v&sort=r`, options);
    // const response = await fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${title}`, options);
    const data = await response.json();
    setResults(data.contents)
    console.log(data.contents)

  }

  // This useEffect is going to run at the start
  useEffect(() => {
    searchYoutube('tech burner')
  }, [])


  return (
    <div className='app'>
      <h1>Youtube Mania</h1>
      <div className="search" >
        <input
          placeholder="Search for Movies of your choice"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <img
          src={searchIcon}
          alt="searchIcon"
          onClick={() => {
            searchYoutube(searchTerm)
          }}

        />
      </div>
      <Card results={results}/>


    </div>
  );
}

export default App;
