import { connect } from "react-redux";
import { fetchProducts } from '../../actions/product_actions'
import SearchIndex from './search_index'

const mSTP = (state, ownProps) => {

    return ({
        products: Object.values(state.entities.products),
        searchTerm: ownProps.match.params.searchTerm,
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts())
    })
}

export default connect(mSTP, mDTP)(SearchIndex);