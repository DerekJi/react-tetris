import { ScoreActions } from "../actions/score.actions"
import { DECREMENT, INCREMENT, RESET } from "../constants"

export default (state = 0, action: ScoreActions): number => {
    switch (action.type) {
      case RESET:
        return 0;
      case INCREMENT:
      case DECREMENT:
        return state + action.payload;
      default:
        return state;
    }
}
