import React, {useEffect, useState} from 'react'
import playsvg from './svgs/play.svg'
import {Loading} from "./Loading"
import Video_details from './Video_details'
import Music_player from './Music_player'
const MovieCard = (props) => {
    const [videoId, setVideoId] = useState("");

    // const [loading, setLoading] = useState(false);


    const results = props.results
    return (
        <div> { videoId == "" ? results ?. length > 0 ? (
                <div>
                    <div className="maindiv flex-wrap">
                        {
                        results.map((result) => (

                            <div className="m-4 w-40 h-[12rem]  songcard  text-white -z-[1]"
                                key={
                                    result.video.videoId
                            }>

                                <img className="img h-[16rem]"
                                    src={
                                        result.video.thumbnails[0].url
                                    }
                                    // onClick={() => {handleClick ()}}
                                />
                                <button className="relative  bottom-[6.5rem] left-14  z-10"
                                    onClick={
                                        () => {
                                            setVideoId(result.video.videoId)
                                        }
                                }>
                                    <img src={playsvg}
                                        className=""
                                        alt=""/>
                                </button>
                                <div className=" bg-white h-[3rem] truncate overflow-hidden  text-black pl-2 relative bottom-[3.9rem]">
                                    <p className="font-bold text text-base truncate ">
                                        {
                                        result.video.title
                                    } </p>
                                </div>
                            </div>

                        ))
                    } </div>

                </div>
            ) : (
                <Loading/>) : <div>
                    {/* <Video_details videoId={videoId}
                        onVideoIdChange={setVideoId}/> */}
                    <Music_player videoId={videoId}
                        onVideoIdChange={setVideoId}/>
                        </div>
        } </div>

    )
}

export default MovieCard
