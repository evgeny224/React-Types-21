import { AuthType } from "./types";

/* eslint-disable no-unused-vars */
export enum UserAuthActionType {
  userAuth = "USER_AUTENTIFICATION",
}

export const UserAuthActionCreator = (UserAuth: AuthType) => {
  return {
    type: UserAuthActionType.userAuth,
    payload: UserAuth,
  };
};
