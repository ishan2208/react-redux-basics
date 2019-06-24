import { createStore } from 'redux';
import allReducers from './reducers/index';

const initialState = {};

const store = createStore(allReducers, initialState);

export default store;