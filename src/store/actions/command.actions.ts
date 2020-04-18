import { IAction } from "src/models/action.interface";
import { PAUSE_TYPE, RESUME_TYPE, START_TYPE, STOP_TYPE } from "../constants";

export interface IStartAction extends IAction { type: START_TYPE }
export interface IPauseAction extends IAction { type: PAUSE_TYPE }
export interface IResumeAction extends IAction { type: RESUME_TYPE }
export interface IStopAction extends IAction { type: STOP_TYPE }


export type CommandActions = IStartAction | IPauseAction | IResumeAction | IStopAction;

export const startGame = (): IStartAction => ({ type: START });
export const pauseGame = (): IStartAction => ({ type: PAUSE });
export const resumeGame = (): IStartAction => ({ type: RESUME });
export const stopGame = (): IStartAction => ({ type: STOP });

