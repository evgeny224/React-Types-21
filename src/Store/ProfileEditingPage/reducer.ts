import { UserEditingActionType } from "./actions";
import { userEditingActionType, UserType } from "./types";

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
  action: userEditingActionType
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
