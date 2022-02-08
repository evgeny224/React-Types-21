import { Dispatch } from "react";
import { makeRequest } from "../../Network";
import { OneUserType, userFetchEditingAction } from "./types";

/* eslint-disable no-unused-vars */
export enum UserActionType {
  fetchOneUserData = "FETCH_ONE_USER_DATA",
  fetchUserData = "FETCH_USER_DATA",
}

// export const userEditingActionCreator = (action: OneUserType) => {
//   return {

//   }
// }

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
      type: UserActionType.fetchUserData,
      payload: data,
    });
  };
};
