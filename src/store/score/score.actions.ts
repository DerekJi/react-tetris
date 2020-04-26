import { IDecrementAction, IIncrementAction, IResetAction } from "src/models/number-action.interface";
import { DECREMENT, INCREMENT, RESET } from "../constants";

export type ScoreActions = IIncrementAction | IDecrementAction | IResetAction;

export const incrementScore = (payload: number): IIncrementAction => ({
  payload,
  type: INCREMENT,
});

export const decrementScore = (payload: number): IDecrementAction => ({
  payload,
  type: DECREMENT,
});

export const resetScore = (): IResetAction => ({
  payload: 0,
  type: RESET,
});
