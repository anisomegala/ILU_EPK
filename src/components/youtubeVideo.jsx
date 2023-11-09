import React from "react"; 
import YouTube from 'react-youtube';
import useYoutubePLayer from "./useYouTubePlayer";
  
const YoutubeVideo = (props) => { 
  const videoId = props.id;
  const { player, opts, onReady} = useYoutubePLayer(videoId);
  
    return ( 
      <div> 
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div> 
    ); 
} 


export default YoutubeVideo;