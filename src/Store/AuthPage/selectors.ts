import { RootReducerType } from "../types";

/* eslint-disable import/prefer-default-export */
export const getAuthUserData = (state: RootReducerType) => state.auth.authUser;

export const getAuthUsersData = (state: RootReducerType) =>
  state.auth.authUsers;
