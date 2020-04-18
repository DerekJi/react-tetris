import { IAction } from "src/models/action.interface";
import { PAUSE, PAUSE_TYPE, RESUME, RESUME_TYPE, START, START_TYPE, STOP, STOP_TYPE } from "../constants";

export interface IStartAction extends IAction { type: START_TYPE }
export interface IPauseAction extends IAction { type: PAUSE_TYPE }
export interface IResumeAction extends IAction { type: RESUME_TYPE }
export interface IStopAction extends IAction { type: STOP_TYPE }


export type CommandActions = IStartAction | IPauseAction | IResumeAction | IStopAction;

export const startGame = (): IStartAction => ({ type: START });
export const pauseGame = (): IPauseAction => ({ type: PAUSE });
export const resumeGame = (): IResumeAction => ({ type: RESUME });
export const stopGame = (): IStopAction => ({ type: STOP });

