import { combineReducers } from "redux";
import { createStore } from 'redux';

export const rootReducer = combineReducers({
});

export const store = createStore(rootReducer);