import React from 'react';
import { withRouter } from 'react-router-dom';

const Player = (props) =>{

    const trackId = props.trackId;

    if (trackId){
        return( <iframe
            src={`https://open.spotify.com/embed/track/${trackId}`}
            width="300"
            height="380"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"></iframe>)
    }else{
        return null;
    }
};

export default withRouter(Player); 