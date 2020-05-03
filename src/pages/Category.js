import React from 'react';
import { withRouter } from 'react-router-dom';

class Category extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {"Category page for $this.props"}
            </div>
        )
    }
}

export default withRouter(Category);
