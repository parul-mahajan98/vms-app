/*jshint esversion:6*/
import axios from 'axios';

import {
    FETCH_VEHICLE_REQUEST,
    FETCH_VEHICLE_SUCCESS,
    FETCH_VEHICLE_FAILURE,
    ADD_VEHICLE_REQUEST,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILURE
} from './vehicleTypes';
const fetchVehicleRequest = () => {
    return {
        type: FETCH_VEHICLE_REQUEST
    };
};
const fetchVehicleSuccess = (data) => {
    return {
        type: FETCH_VEHICLE_SUCCESS,
        payload: data
    };
};
const fetchVehicleFailure = (error) => {
    return {
        type: FETCH_VEHICLE_FAILURE,
        payload: error
    };
};
const addVehicleRequest = () => {
    return {
        type: ADD_VEHICLE_REQUEST
    };
};
const addVehicleSuccess = (data) => {
    return {
        type: ADD_VEHICLE_SUCCESS,
        payload: data
    };
};
const addVehicleFailure = (error) => {
    return {
        type: ADD_VEHICLE_FAILURE,
        payload: error
    };
};

export const fetchVehicles = (vehicle) => {
    return (dispatch) => {
        dispatch(fetchVehicleRequest);
        axios.get("http://localhost:8080/api/v1/vehicles")
            .then(response => {
                dispatch(fetchVehicleSuccess(response.data));
            }).catch(error => {
                dispatch(fetchVehicleFailure(error));
            });
    };
};

export const addVehicle = (vehicle) => {
    return (dispatch) => {
        dispatch(addVehicleRequest);
        axios.post("http://localhost:8080/api/v1/vehicles", vehicle)
            .then(response => {
                dispatch(addVehicleSuccess(response.data));

            }).catch(error => {
                dispatch(addVehicleFailure(error));
            });
    };
};