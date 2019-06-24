import { combineReducers } from 'redux';

import loginReducer from './user-login';

export default combineReducers({
    user: loginReducer,
});

