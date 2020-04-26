import { LevelActions } from "./level.actions";
import { DECREMENT, INCREMENT, RESET } from "../constants"

export default (state = 0, action: LevelActions): number => {
    switch (action.type) {
      case RESET:
        return 1;
      case INCREMENT:
      case DECREMENT:
        return state + action.payload;
      default:
        return state;
    }
}
