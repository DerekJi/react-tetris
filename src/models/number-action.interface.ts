import { DECREMENT_TYPE, INCREMENT_TYPE, RESET_TYPE } from "src/store/constants";
import { IAction } from "./action.interface";

export interface INumberAction extends IAction {
  payload: number;
}

export interface IIncrementAction extends INumberAction { type: INCREMENT_TYPE, payload: number; }
export interface IDecrementAction extends INumberAction { type: DECREMENT_TYPE, payload: number; }
export interface IResetAction extends INumberAction { type: RESET_TYPE; payload: number; }