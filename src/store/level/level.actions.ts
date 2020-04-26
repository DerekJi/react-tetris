import { IDecrementAction, IIncrementAction, IResetAction } from "src/models/number-action.interface";
import { DECREMENT, INCREMENT, RESET } from "../constants";

export type LevelActions = IIncrementAction | IDecrementAction | IResetAction;

export const incrementLevel = (): IIncrementAction => ({
  payload: 1,
  type: INCREMENT,
});

export const decrementLevel = (): IDecrementAction => ({
  payload: -1,
  type: DECREMENT,
});

export const resetLevel = (): IResetAction => ({
  payload: 1,
  type: RESET,
});