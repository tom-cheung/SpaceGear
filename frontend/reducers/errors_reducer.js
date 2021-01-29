
import { combineReducers } from "redux";
import ordersErrorsReducer from "./orders/orders_errors_reducer";
import sessionErrorsReducer from './session_errors_reducer';
import contactErrorReducer from './contacts_reducer/contacts_error_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    contacts: contactErrorReducer, 
    // order_errors: ordersErrorsReducer
});

export default errorsReducer; 