import {combineReducers} from 'redux';
import fetchDataReducer from './fetchDataReducer'
import setDetailsReducer from './setDetailsReducer';
import authReducer from './authReducer';

export default combineReducers ({
    fetchData: fetchDataReducer,
    auth: authReducer
})