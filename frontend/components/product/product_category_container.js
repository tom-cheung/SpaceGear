import { connect } from 'react-redux'
import ProductCategory from './product_category'


const mSTP = (state, ownProps) => {

    let categoryId = ownProps.match.params.categoryId ? parseInt(ownProps.match.params.categoryId) : '';
    return ({
        filteredProducts: Object.values(state.entities.products).filter( (product) => {return product.category_id === categoryId}),
        categoryName: ownProps.match.params.categoryName
    })
}

const mDTP = (dispatch) => {
    return ({

    })
}

// returns objects because the props are objects being passed into the component 

export default connect(mSTP, mDTP)(ProductCategory)