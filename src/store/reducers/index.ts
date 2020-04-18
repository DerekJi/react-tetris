import { combineReducers } from "redux";
import scoreReducers from './score.reducers';

export const rootReducer = combineReducers({
  scoreReducers,
});
