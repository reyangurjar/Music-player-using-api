import React, { useEffect, useState } from 'react'
import { options } from './App.js'
import playsvg from './svgs/play.svg'
//result.video.publishedTimeText
//result.video.thumbnails[0].url
//result.Title
//result.video.channelName
//result.video.title
//

const MovieCard = (props) => {
  const [audioUrl, setAudioUrl] = useState({});
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // let isCancelled = false;
    // if(!isCancelled){
    fetchaudio(searchTerm);
    // }
    // return () => {
    // isCancelled = true;
    // };

  }, [searchTerm])



  const fetchaudio = (videoId) => {
    // let isCancelled = false;
    // fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`, 
    // options)
    // .then((response) => response.json())4
    // .then((data) => {
    // setAudioUrl(data);
    console.log('this is the data', videoId)
    // setLoading(false);
    // })
    // .catch((error) => {
    // console.log(error);
    // setLoading(false);
    // });
    // setSearchTerm('')
  }

  // const [results, setResults] = useState([]);



  const results = props.results
  return (
    <div>

      {results?.length > 0 ? (
        <div className="flex" >
          {results.map(
            (result) => (
             
                <div className="m-2 w-40 h-[12rem]  songcard  text-white -z-[1]"
                >

                  <img
                    className="h-[10rem] w-40"
                    src={result.video.thumbnails[0].url}

                  />
                  <button
                    className="relative  bottom-[6.5rem] left-14  z-10"
                    onClick={() => { setSearchTerm(result.video.videoId) }}

                  >
                    <img src={playsvg} className="" alt="" />
                  </button>
                  <div className=" bg-white h-[3rem] truncate overflow-hidden  text-black pl-2 relative bottom-[3.9rem]">
                    <p className="font-bold text text-base truncate ">
                      {result.video.title}
                    </p>
                  </div>
                </div>
             
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No videos found</h2>
        </div>
      )}

    </div>
  )
}

export default MovieCard
