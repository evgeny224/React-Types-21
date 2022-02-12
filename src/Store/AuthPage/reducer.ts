import { UserAuthActionType } from "./actions";
import { ActionsType, AuthType, ReducerType } from "./types";

const intialState: ReducerType = {
  authUsers: [],
  authUser: {} as AuthType,
};

const authReducer = (state = intialState, action: ActionsType): ReducerType => {
  switch (action.type) {
    case UserAuthActionType.usersAuth:
      return {
        ...state,
        authUsers: action.payload,
      };
    case UserAuthActionType.userAuth:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
