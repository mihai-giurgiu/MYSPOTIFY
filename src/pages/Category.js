import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Link
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
