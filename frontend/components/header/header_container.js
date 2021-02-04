import { connect } from 'react-redux'
import Header from './header'

import { fetchCategory } from '../../actions/category_actions'
import { fetchProducts } from '../../actions/product_actions'

// test 
// import {fetchCategory} from '../../util/category_util'
//

const mSTP = (state) => {
    return ({
        categories: Object.values(state.entities.categories),
        products: Object.values(state.entities.products), 
    })
}

const mDTP = (dispatch) => {
    return ({
    fetchCategory: () => dispatch(fetchCategory()), 
    fetchProducts: () => dispatch(fetchProducts())
    })
}

// dispatching fetch category which is a thunk action creator, inside of that it dispatches the action creator with the 
// result from the ajax call 

// make an ajax call, . then dispatch the result with a action creator 
// . then render 
//    fetchCat: () => fetchCategory().then(() => dispatch().then())


export default connect(mSTP, mDTP)(Header);