import userReducer from './user_reducer';
import categoryReducer from './category_reducer'
import { combineReducers } from 'redux'

const entitiesReducer = combineReducers({
    users: userReducer,
    categories: categoryReducer
})

export default entitiesReducer; 