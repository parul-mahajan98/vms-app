/*jshint esversion:6*/
import {
    FETCH_VEHICLE_REQUEST,
    FETCH_VEHICLE_SUCCESS,
    FETCH_VEHICLE_FAILURE,
    ADD_VEHICLE_REQUEST,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILURE
} from './vehicleTypes';

const initialState = {
    vehicle: '',
    error: ''
};

const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VEHICLE_REQUEST:
            return {
                ...state
            };
        case FETCH_VEHICLE_SUCCESS:
            return {
                vehicle: action.payload,
                error: ''
            };
        case FETCH_VEHICLE_FAILURE:
            return {
                vehicle: '',
                error: action.payload
            };
        case ADD_VEHICLE_REQUEST:
            return {
                ...state
            };
        case ADD_VEHICLE_SUCCESS:
            return {
                vehicle: action.payload,
                error: ''
            };
        case ADD_VEHICLE_FAILURE:
            return {
                vehicle: '',
                error: action.payload
            };
        default:
            return state;
    }
};
export default vehicleReducer;