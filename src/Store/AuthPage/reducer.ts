import { UserAuthActionType } from "./actions";
import { AuthType } from "./types";

const intialState: AuthType = {
  login: "abc",
  password: "123",
};

const authReducer = (state = intialState, action: any): AuthType => {
  switch (action.type) {
    case UserAuthActionType.userAuth: {
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
