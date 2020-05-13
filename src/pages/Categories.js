import React from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';

class Categories extends React.Component {
    state ={
        categories: []
    };

    componentDidMount () {

        const token = localStorage.getItem('token'); 
        const parseToken = JSON.parse(token);

        fetch('https://api.spotify.com/v1/browse/categories', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${parseToken.token}`
            }
        }).then(result => {
            console.log(result)
            return result.json();
        }).then(data => {
            const categories = data.categories.items.map(item => {
                return {
                    id: item.id,
                    name: item.name, 
                    url: item.icons && item.icons.length > 0 ? item.icons[0].url : ''
                }
            })
            console.log(categories); 

            this.setState({
                categories: categories
            })
        })
    }
    render() {
        return this.state.categories.map(category => {
            return (
                <Category
                    name={category.name}
                    id={category.id}
                    url={category.url}
                />
            )
        }); 
    }
}

export default withRouter(Categories); 