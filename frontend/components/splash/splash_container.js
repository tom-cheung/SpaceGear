import { connect } from 'react-redux'
import ProductIndex from './splash'
import { fetchProducts } from '../../actions/product_actions'
import { logoutUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({
        categories: Object.values(state.entities.categories)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts())
    })
}

export default connect(mSTP, mDTP)(ProductIndex);
