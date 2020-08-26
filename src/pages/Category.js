import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

class Category extends React.Component {
    colors;
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        this.colors = ['#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933'];

        console.log('document.getElementById()')
        Array.prototype.random = function (length) {
                return this[Math.floor((Math.random()*length))];
        }
        var backColor = this.colors.random(this.colors.length)

        const divStyle = {
            backgroundColor: backColor
        };

        return (
            <div className ="category " style={divStyle}>
                <Link className="category-link"
                    to={{
                        pathname: `/playlists/${this.props.id}`,
                        state: {
                            categoryName:this.props.name
                        }
                    }}
                >
                    {this.props.name}
                </Link>
            </div>
        )
    }
}

export default Category;
