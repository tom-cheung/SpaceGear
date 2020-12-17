import { combineReducers } from 'redux'
import userReducer from './user_reducer';
import categoryReducer from './category_reducer'
import productsReducer from './products_reducers/products_reducer'
import orderReducer from './orders_reducer'

const entitiesReducer = combineReducers({
    users: userReducer,
    categories: categoryReducer,
    products: productsReducer,
    orders: orderReducer
})

export default entitiesReducer; 