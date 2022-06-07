<div className="m-2 w-40 h-[12rem]  songcard  text-white -z-[1]   " 
      key={result.video.videoId}>
  <img
    className="h-[10rem] w-40"
    src={result.video.thumbnails[0].url}

  />
  <button
    className="relative  bottom-[6.5rem] left-14  z-10"
    // onClick={fetchaudio(result.video.videoId)}
    
  >
    <img src="svgs/play.svg" className="filter invert" alt="" />
  </button>
  <div className=" bg-white h-[3rem] truncate overflow-hidden  text-black pl-2 relative bottom-[3.9rem]">
    <p className="font-bold text text-base truncate ">
      {result.video.title}
    </p>
  </div>
</div>