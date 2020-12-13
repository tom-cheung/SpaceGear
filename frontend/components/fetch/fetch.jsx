import React from 'react';
import {fetchCategory } from '../../util/category_util'


class Fetch extends React.Component {

    componentDidMount() {
        this.props.fetchCategory();
    }


    render() {
        return(
            <p hidden></p>
        )
    }

}

export default Fetch;