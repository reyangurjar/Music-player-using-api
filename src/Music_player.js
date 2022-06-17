import Video_details from './Video_details'
import {useCallback, useState, useEffect, useRef} from 'react'
import {Loading} from './Loading'
import ReactAudioPlayer from 'react-audio-player';
import playSvg from './svgs/play.svg'
import Controls from './Controls'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'


const Music_player = ({videoId}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioEl = useRef(null);
    let [videoDetails, setVideoDetails] = useState({});
    const [audioUrl, setAudioUrl] = useState("");
    const getVideoDetails = (e) => {
        setVideoDetails(e);
    }

    const getAudioDetails = (dataWeGotFromChildComponent) => {
        setAudioUrl(dataWeGotFromChildComponent);
    }

    const thumbnail = videoDetails.thumbnail;
    // const audioElement = new Audio(audioUrl);

    // useEffect(() => {


    //         audioElement.play()
    //         console.log('function got called')
    // }, [])

    useEffect(() => { // audioElement.pause()

        if (isPlaying) {
            audioEl.current.play()
            console.log('play')
            setIsPlaying(true)
        } else {
            audioEl.current.pause()
            console.log('pause')
            setIsPlaying(false)
        }
        console.log(isPlaying)
    });

    // useScript('./music_player_js');
    // thumbnail?.thumbnails[1].url
    // videoDetails.title
    // <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
    return (
        <>
            <Video_details videoId={videoId}
                sendVideoDetails={getVideoDetails}
                sendAudioDetails={getAudioDetails}/>
            <audio ref={audioEl}
                src={audioUrl}
                id="audio">  
            </audio>

            {
            audioUrl == "" ? <Loading/>: <div>
                <div className="music-player  w-[100vw] left-0 z-[2] flex-col sm:flex-row h-[8rem] sm:flex fixed bottom-0 bg-[#02030f] text-white">
                    <div className="flex items-center  justify-center">
                        <img id="cover" className="w-[7rem] h-[5rem]  border rounded-xl"
                            src={
                                thumbnail ?. thumbnails[1].url
                            }
                            alt="Cover"/>
                        <h1 id="title" className="ml-2 w-56 text-black-900 text-lg">
                            {
                            videoDetails.title
                        } </h1>
                    </div>

                    <Controls isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying} ref={audioEl}/>

                </div>
            </div>
        } </>

    )

}

export default Music_player
