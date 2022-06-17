import React, { useState, useRef, useEffect, forwardRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function Controls(props, ref) { // state
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioEl = ref
    console.log(ref)
    // references
    const progressBar = useRef(); // reference our progress bar
    const animationRef = useRef(); // reference the animation

    const togglePlayPause = () => {
        const prevValue = props.isPlaying;
        props.setIsPlaying(!prevValue);
        if (!prevValue) {
            audioEl.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioEl.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    useEffect(() => {
        const seconds = Math.floor(audioEl.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [
        audioEl?.current?.loadedmetadata,
        audioEl?.current?.readyState
    ]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const whilePlaying = () => {
        progressBar.current.value = audioEl.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioEl.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            '--seek-before-width',
            `${progressBar.current.value / duration * 100
            }%`
        )
        setCurrentTime(progressBar.current.value);
    }

    return (
        <>
            <div className="ml-[13%]  flex-col">
                <div className="flex">
                    <div>{
                        calculateTime(currentTime)
                    }
                    </div>


                    <input id="progressbar" ref={progressBar} className="sm:w-44 md:w-96 lg:w-96 w-48" defaultValue={0} onChange={changeRange} type="range" />

                    <div>
                        {(duration && !isNaN(duration)) && calculateTime(duration)}
                    </div>
                </div>
                <div className="navigations  flex items-center justify-center relative">
               

                    <button className="play-btn w-12 m-auto"
                        onClick={
                            () => togglePlayPause()
                        }>
                        <FontAwesomeIcon size="2xl"
                            icon={
                                props.isPlaying ? faPause : faPlay
                            } />
                    </button>

                </div>
            </div>

        </>

    )
}

export default forwardRef(Controls)
