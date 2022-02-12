/* eslint-disable no-unused-vars */
import { Dispatch } from "react";
import { makeRequest } from "../../Network";
import { OneUserType, userFetchEditingAction } from "./types";

export enum UserActionType {
  fetchOneUserData = "FETCH_ONE_USER_DATA",
  fetchUsersData = "FETCH_USERS_DATA",
}
export const fetchOneUserActionCreator = (action: OneUserType) => {
  return {
    type: UserActionType.fetchOneUserData,
    payload: action,
  };
};

export const fetchUserDataActionCreator = () => {
  return async (dispatch: Dispatch<userFetchEditingAction>) => {
    const data = await makeRequest({ url: "users" });
    dispatch({
      type: UserActionType.fetchUsersData,
      payload: data,
    });
  };
};
