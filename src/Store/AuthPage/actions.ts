import { Dispatch } from "react";
import { makeRequest } from "../../Network";
import { AuthType, authUsersAction } from "./types";

/* eslint-disable no-unused-vars */
export enum UserAuthActionType {
  userAuth = "USER_AUTENTIFICATION",
  usersAuth = "USERS_AUTENTIFICATION",
}

export const oneAuthUserActionCreator = (action: AuthType) => {
  return {
    type: UserAuthActionType.userAuth,
    payload: action,
  };
};

export const getUserAuthActionCreator = () => {
  return async (dispatch: Dispatch<authUsersAction>) => {
    const data = await makeRequest({ url: "users" });
    dispatch({
      type: UserAuthActionType.usersAuth,
      payload: data,
    });
  };
};
