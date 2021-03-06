import React from 'react';
import { withRouter } from 'react-router-dom';

import Player from '../components/Player';
import { checkAndReturnToken } from '../Utils';
import Track from '../components/Track';

class Tracks extends React.Component{

    state ={
        tracks : [],
        currentTrackId : null
    };
    
    componentDidMount(){
        
        const token = checkAndReturnToken(this.props.history)

        if(token === null){
            return;
        }

        const playlistId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if(playlistId){
            const token = localStorage.getItem('token'); 
            const parseToken = JSON.parse(token);

            fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=20`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parseToken.token}`
                }
            }).then(result => {
                console.log(result)
                return result.json();
            }).then(data => {
                const tracks = data.items.map(item => {

                    const track = item.track ? item.track: {};

                    return {
                       id: track.id,
                       name: track.name,
                       duration: track.duration_ms ?
                           track.duration_ms / 60000 : 0,
                       artists: track.artists ?
                           track.artists.map(artist => {
                               return artist.name;
                           }) : []

                    }
                });
                this.setState({
                    tracks: tracks
                });
                
            });
        }

    }

    

    onTrackClickedHandler = (id) => {
        //console.log(id)
        this.setState({
            currentTrackId: id
        })

    };

    render() {


        const playlistName = this.props.location && this.props.location.state ?
            this.props.location.state.categoryName : 'Default';

            
        return(

        
        <div>
            <h1>
                {
                    playlistName
                }
            </h1>
            <div>
                { this.state.tracks.map( track => {
                        return(
                            <Track 
                                pickTrack = {this.onTrackClickedHandler}
                                id = {track.id}
                                name = {track.name}
                                artists = {track.artists}
                                duration = {track.duration}
                            />
                        )
                    }
                )}
            </div>
            <section>
                <Player
                    trackId = { this.state.currentTrackId }
                />
            </section>
        </div>
        )
    }
}

export default withRouter(Tracks); 