import { UserType } from "./types";

/* eslint-disable no-unused-vars */
export enum UserEditingActionType {
  userEditing = "USER_EDITING",
}
export const userEditingActionCreator = (userEditing: UserType) => {
  return {
    type: UserEditingActionType.userEditing,
    payload: userEditing,
  };
};
