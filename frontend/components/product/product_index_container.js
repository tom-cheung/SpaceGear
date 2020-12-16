import { connect } from "react-redux";
import { fetchProducts } from '../../actions/product_actions'
import ProductIndex from './product_index'

const mSTP = (state) => {
    return ({
        filteredProducts: Object.values(state.entities.products)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts())
    })
}

export default connect(mSTP, mDTP)(ProductIndex);