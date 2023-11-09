import { useState, useEffect } from "react";
import YouTube from "react-youtube";

const useYoutubePLayer = (videoId) => {
    const [player, setPLayer] = useState(null);

   const opts = {
    height: "390",
    width: "640",
    playerVars: {},
};

const onReady = ( e ) => {
    setPLayer(e.target);
}

useEffect(() => {
    if (player) {
        player.loadVideoById(videoId);
    }
}, [player, videoId]);

return {
    player,
    opts,
    onReady,
};

};



export default useYoutubePLayer;