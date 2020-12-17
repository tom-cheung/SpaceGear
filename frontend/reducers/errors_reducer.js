
import { combineReducers } from "redux";
import ordersErrorsReducer from "./orders/orders_errors_reducer";
import sessionErrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    // order_errors: ordersErrorsReducer
});

export default errorsReducer; 