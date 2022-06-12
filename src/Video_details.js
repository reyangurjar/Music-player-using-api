import {options} from './App'
import Card from './Card'



import React, {useEffect,useCallback,useState} from 'react'
const Video_details = ({videoId, onVideoIdChange,sendAudioDetails, sendVideoDetails}) => {
    
    const handleInputChange = useCallback(event => {
      onVideoIdChange(event.target.value)
    }, [onVideoIdChange])

    useEffect(() => {
      if (videoId !== "") {
          fetchVideoDetails(videoId);
      }
  }, [videoId])

    const fetchVideoDetails = async (videoId) => { // setLoading(true);
      

     await   fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`, options).then(response => response.json()).then(response => {

            sendAudioDetails(response.streamingData.formats[0].url);
            sendVideoDetails(response.videoDetails)
            // console.log(response.videoDetails)
            // console.log('This is the audio of the song/video'+ response.streamingData.formats[0].url)
            // console.log(response)
            // console.log('Video Id is', videoId)
        }).catch(err => console.error(err));

        // setLoading(false);
    }
    return (
        null
    )
    
}

export default Video_details
