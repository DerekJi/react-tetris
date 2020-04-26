import { IStatusAction } from '../../models/status-action.interface';
import { PAUSE, PAUSE_TYPE, 
  PAUSED, RESUME, RESUME_TYPE, RUNNING, START, START_TYPE, STOP, STOP_TYPE, STOPPED } from "../constants";

export interface IStartAction extends IStatusAction { type: START_TYPE }
export interface IPauseAction extends IStatusAction { type: PAUSE_TYPE }
export interface IResumeAction extends IStatusAction { type: RESUME_TYPE }
export interface IStopAction extends IStatusAction { type: STOP_TYPE }


export type StatusActions = IStartAction | IPauseAction | IResumeAction | IStopAction;

export const startGame = (): IStartAction => ({ type: START, payload: RUNNING });
export const pauseGame = (): IPauseAction => ({ type: PAUSE, payload: PAUSED });
export const resumeGame = (): IResumeAction => ({ type: RESUME, payload: RUNNING });
export const stopGame = (): IStopAction => ({ type: STOP, payload: STOPPED });

