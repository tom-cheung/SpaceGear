import { connect } from 'react-redux'
import ProductShow from './product_show'


// console.log('Hello from show container')

const mSTP = (state, ownProps) => {
    return ({
        filteredProduct: state.entities.products[ownProps.match.params.productId]
    })
}

const mDTP = (dispatch) => {
    return ({

    })
}

export default connect(mSTP, mDTP)(ProductShow);

/*

12/14/2020 
11:12AM 

This container should take in all the products and find a specific product by the id 
this could be done via filtering by the product id. Or just keying right into it 
remember my product slice of state has ALL products at the moment 

*/