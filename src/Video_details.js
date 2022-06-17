import {options} from './App'
import Card from './Card'


import React, {useEffect, useCallback, useState} from 'react'
const Video_details = ({videoId, onVideoIdChange, sendAudioDetails, sendVideoDetails}) => {

    const handleInputChange = useCallback(event => {
        onVideoIdChange(event.target.value)
    }, [onVideoIdChange])

    useEffect(() => {
        if (videoId !== "") {
            fetchVideoDetails(videoId);
            fetchAudio(videoId)
        }
    }, [videoId])

    const fetchVideoDetails = async (videoId) => { // setLoading(true);


        let data = await fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`, options)
        let response = await data.json()
        console.log(response.streamingData.formats)
        sendVideoDetails(response.videoDetails)
        // console.log(response.videoDetails)
        // console.log(response.streamingData.formats[0].url)
        // console.log(response)
        // console.log('Video Id is', videoId)


        // setLoading(false);
    }
    const optionsForAnotherApi ={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19a3a6b14cmsheb46c5a0934bfd2p14a76djsne9cbfe6f7dec',
            'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
        }
    };
    const fetchAudio = async (videoId) => {
        let data = await fetch(`https://youtube-video-info.p.rapidapi.com/video_formats?video=${videoId}`, optionsForAnotherApi)
        let response = await data.json()
        sendAudioDetails(response.AllFormats[4].Link);
    }
    return(null)

}

export default Video_details
