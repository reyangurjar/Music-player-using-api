import Video_details from './Video_details'
import {useCallback, useState, useEffect,useRef} from 'react'
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
    return (
        <>
            <Video_details videoId={videoId}
                sendVideoDetails={getVideoDetails}
                sendAudioDetails={getAudioDetails}/>
                <audio  ref={audioEl} src={audioUrl}
                        id="audio"></audio>
                        
                 {
            audioUrl == "" ? <Loading/>: <div> {/* <ReactAudioPlayer
  src={audioUrl}
  controls
/>  */}
                <div className="music-player  w-[100vw] z-[2] flex-col sm:flex-row h-[8rem] sm:flex fixed bottom-0 left-0 right-0 bg-[#02030f] text-white">
                    
                    {/* {playSong('jhinasdasdsad')} */}
                    <div className="flex items-center  justify-center">
                        <img className="w-[5rem] h-[4rem]  border rounded-lg"
                            src={
                                thumbnail ?. thumbnails[1].url
                            }
                            alt="Cover"/>


                        <h1 className="ml-2  text-black-900 text-lg">
                            {
                            videoDetails.title
                        } </h1>
                    </div>
                    <div className=" m-auto flex-col">
                        {/* <input className="sm:w-44 md:w-96 lg:w-96 w-48" value="0" type="range"/> */}
                        <div className="navigations flex items-center justify-center relative">
                            {/* <img className="w-12" src="svgs/skip_previous_white_24dp.svg" /> */}

                            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />


                            {/* <i className="ml-8 filter invert fa-2x fa-solid fa-forward-step"  /> */} </div>
                    </div>

                    <div className="flex  items-center ">
                        <div id="shufflediv" className="mx-3 inline-block   border rounded-2xl  ">
                            {/* <img id="shuffledivimg" className=" " src="svgs/shuffle.svg"/></div>  */}
                            <div id="repeatdiv" className="mx-3 inline-block border rounded-2xl ">
                                <img id="repeatimg" className="filter invert  " src="svgs/repeat.svg"/></div>
                            <div className="mr-1  hidden sm:block">
                                <img id="volumeicon" src="svgs/volume_up.svg" className=""/></div>
                            {/* <input className="hidden sm:block filter invert mr-1 w-14 sm:w-24 md:w-36 lg:max-w-full" type="range" id="change_vol"  step="0.001" min="0" max="1" value="1"/> */} </div>
                    </div>
                </div>
            </div>
        } </>

    )

}

export default Music_player
