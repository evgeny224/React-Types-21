import { UserActionType } from "./actions";
import { ActionsType, OneUserType, ReducerType } from "./types";

const initialState: ReducerType = {
  users: [],
  user: {} as OneUserType,
};
const profileReducer = (
  state = initialState,
  action: ActionsType
): ReducerType => {
  switch (action.type) {
    case UserActionType.fetchUsersData:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionType.fetchOneUserData:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
