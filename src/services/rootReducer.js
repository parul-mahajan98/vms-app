/*jshint esversion:6*/
import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import vehicleReducer from './vehicle/vehicleReducer';
import authReducer from './user/auth/authReducer';

const rootReducer = combineReducers({
    user: userReducer,
    vehicle: vehicleReducer,
    auth: authReducer
});
export default rootReducer;