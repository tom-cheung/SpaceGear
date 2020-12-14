import userReducer from './user_reducer';
import categoryReducer from './category_reducer'
import { combineReducers } from 'redux'
import productsReducer from './products_reducers/products_reducer'

const entitiesReducer = combineReducers({
    users: userReducer,
    categories: categoryReducer,
    products: productsReducer
})

export default entitiesReducer; 