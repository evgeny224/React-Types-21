import { UserPhotoActionType } from "./actions";
import { ActionsType, PhotoType, ReducerType } from "./types";

const intialState: ReducerType = {
  users: [],
  user: {} as PhotoType,
};

const photoReducer = (
  state = intialState,
  action: ActionsType
): ReducerType => {
  switch (action.type) {
    case UserPhotoActionType.usersPhotos:
      return {
        ...state,
        users: action.payload,
      };
    case UserPhotoActionType.userPhoto:
      return {
        ...state,
        user: action.payload,
      };
    case UserPhotoActionType.noneUserPhoto:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
