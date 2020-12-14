import { connect } from "react-redux";
import ProductType from './product_type'

const mSTP = (state, ownProps) => {
    let categoryId = parseInt(ownProps.match.params.categoryId)
    let typeId = parseInt(ownProps.match.params.typeId)

    return({
        filteredProducts: Object.values(state.entities.products).filter( (product) => {return product.category_id === categoryId && product.type_id === typeId}),
        categoryName: ownProps.match.params.categoryName,
        typeName: ownProps.match.params.typeName
    })
}

const mDTP = (dispatch) => {
    return({

    })
}

export default connect(mSTP, mDTP)(ProductType);