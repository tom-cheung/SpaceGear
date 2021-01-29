import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import categoryReducer from './category_reducer';
import productsReducer from './products_reducers/products_reducer';
import orderReducer from './orders/orders_reducer';
import contactReducer from './contacts_reducer/contacts_reducer';

const entitiesReducer = combineReducers({
    users: userReducer,
    categories: categoryReducer,
    products: productsReducer,
    orders: orderReducer,
    contacts: contactReducer,
})

export default entitiesReducer; 