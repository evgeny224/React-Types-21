import { UserEditingActionType } from "./actions";
import { ReducerType, userEditingAction } from "./types";

const initialState: ReducerType = {
  user: {
    name: "Имя",
    callSign: "Позывной",
    email: "privatka@club.ru",
    birthDate: "Дата рождения",
    family: "Фамилия",
    city: "Город",
  },
};
const profileReducer = (
  state = initialState,
  action: userEditingAction
): ReducerType => {
  switch (action.type) {
    case UserEditingActionType.userEditing:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
