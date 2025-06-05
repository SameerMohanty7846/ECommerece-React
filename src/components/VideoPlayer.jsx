import React from 'react'

const VideoPlayer = ({ src }) => {
  return (
    <>
      <div className="video-container">

        <video src={src} 
        className='video_player'
        autoPlay
        loop
        muted
        playsInline
/>
      </div>


    </>
  )
}

export default VideoPlayer
