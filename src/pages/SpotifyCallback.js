import React from 'react';
import { withRouter } from 'react-router-dom'; 
import queryString from 'query-string';

class SpotifyCallback extends React.Component{
componentDidMount() {
    const hash = this.props.location ? this.props.location.hash : ''; 

    if (hash){
        const parseString = queryString.parse(hash); 
        const date = new Date()
        const token = {
            token: parseString.access_token, 
            expiration : date.getTime() + (parseString.expires_in * 1000)
        };

        localStorage.setItem('token', JSON.stringify(token)); 
    }
    if (this.props.history){
        this.props.history.push('/');
    }

    console.log(queryString.parse(this.props.location.hash)); 
}

    render() {
        return null; 
    }
}

export default withRouter(SpotifyCallback); 