import React, { useEffect, useState } from 'react'
import playsvg from './svgs/play.svg'
import {Loading} from "./Loading"
import {options} from './App'
// import demo from './demo'

const MovieCard = (props) => {
  const [audioUrl, setAudioUrl] = useState({});
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if(searchTerm !== ""){
      fetchaudio(searchTerm);
    }
  }, [searchTerm])

// const navigate = useNavigate();

  const fetchaudio =  (videoId) => {
    // setLoading(true);

    fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`, options)
	.then(response => response.json())
	.then(response => {
    
      setAudioUrl(response.streamingData.formats[0].url);
       console.log(response.streamingData.formats[0].url)
        console.log('Video Id is', videoId)
  })
	.catch(err => console.error(err));
    
        // setLoading(false); 
  }
  // function handleClick() {
  //   navigate("/demo");
  //   console.log('handleclick is working')
  // }

  const results = props.results
  return (
    <div>
     
      {results?.length > 0 ? (
        <div className="maindiv flex-wrap" >
          {results.map(
            (result) => (

              <div className="m-4 w-40 h-[12rem]  songcard  text-white -z-[1]"
              key={result.video.videoId}>

                <img
                  className="img h-[16rem]"
                  src={result.video.thumbnails[0].url}
                  // onClick={() => {handleClick ()}}

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
        <Loading/>
      )}
          
    </div>
     
  )
}

export default MovieCard
