import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
        entities: entitiesReducer, 
        session: sessionReducer,
        errors: errorsReducer
})

export default rootReducer;

// rootReducer returns your global state
// inside of it is slices of state