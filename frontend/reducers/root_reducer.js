import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import uiReducer from './ui_reducer'

const rootReducer = combineReducers({
    entities,
    session,
    ui: uiReducer,
    errors,
});

export default rootReducer;
