import { GAMESTATUS } from "src/store/constants";
import { IAction } from "./action.interface";

export interface IStatusAction extends IAction {
  payload: GAMESTATUS;
}
