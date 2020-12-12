import React from 'react';

class Fetch extends React.Component {

    componentDidMount() {
        this.props.fetchCategory();
    }


    render() {
        console.log('hi')
        return(
            <p hidden></p>
        )
    }

}

export default Fetch;