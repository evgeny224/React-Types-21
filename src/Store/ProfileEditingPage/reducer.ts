import { UserEditingActionType } from "./actions";
import { userEditingAction, UserType } from "./types";

const initialState: UserType = {
  name: "Имя",
  callSign: "Позывной",
  email: "privatka@club.ru",
  birthDate: "Дата рождения",
  family: "Фамилия",
  city: "Город",
};
const profileReducer = (
  state = initialState,
  action: userEditingAction
): UserType => {
  switch (action.type) {
    case UserEditingActionType.userEditing:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
