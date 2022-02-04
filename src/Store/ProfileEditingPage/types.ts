import { UserEditingActionType } from "./actions";

export type ReducerType = {
  user: UserType;
};
export type UserType = {
  name: string;
  callSign: string;
  email: string;
  birthDate: string;
  family: string;
  city: string;
};
export type userEditingActionType = {
  type: UserEditingActionType.userEditing;
  payload: UserType;
};
