import { UserAuthActionType } from "./actions";
import { authUserAction, ReducerType } from "./types";

const intialState: ReducerType = {
  auth: { login: "abc", password: "123" },
};

const authReducer = (
  state = intialState,
  action: authUserAction
): ReducerType => {
  switch (action.type) {
    case UserAuthActionType.userAuth: {
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
