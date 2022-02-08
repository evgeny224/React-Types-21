import { UserAuthActionType } from "./actions";
import { authUserAction, ReducerType } from "./types";

const intialState: ReducerType = {
  auth: { login: "", password: "" },
};

const authReducer = (
  state = intialState,
  action: authUserAction
): ReducerType => {
  switch (action.type) {
    case UserAuthActionType.userAuth: {
      return { ...state, auth: action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;
