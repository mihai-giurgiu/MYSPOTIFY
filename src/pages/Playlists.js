import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import './Playlists.css';


class Playlists extends React.Component {

    state = {
        playlists : []
    }; 

    componentDidMount(){
        // console.log(this.props);

        const categoryId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if(categoryId !== null && categoryId !== undefined){
            const token = localStorage.getItem('token'); 
            const parseToken = JSON.parse(token);

            fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parseToken.token}`
                }
            }).then(result => {
                console.log(result)
                return result.json();
            }).then(data => {
                console.log(data);
                const playlists = data.playlists.items.map(item => {
                    return{
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image: item.images && item.images.length ? 
                            item.images[0].url : ''
                    };
                })

                this.setState({
                    playlists: playlists
                })
            });

        }

        
    }

    render() {

        

        const categoryName = this.props.location && this.props.location.state ?
            this.props.location.state.categoryName : 'Default';

        console.log(this.props)

        return(

            <div>
                <div className="Name">
                <h1>
                    {
                        categoryName
                    }
                </h1>
                </div>
                <section>
                    {
                       
                        this.state.playlists.map(playlist => {
                            return (
                            <Link className="Play"
                            to={{
                                pathname: `/tracks/${playlist.id}`,
                                state: {
                                    categoryName:playlist.name
                                }
                            }}
                        >
                                <div>
                                    <img 
                                        src ={playlist.image} 
                                            alt={`Playlist ${playlist.name} image`}/>
                                    <h3>
                                    {
                                        playlist.name
                                    }
                                    </h3>
                                </div>
                            </Link>
                            )
                        })
                    }
                    
                </section>
            </div>

        );

    }
}

export default withRouter(Playlists); 

