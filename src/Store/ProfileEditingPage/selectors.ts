/* eslint-disable import/prefer-default-export */
import { RootReducerType } from "../types";

export const getUserData = (state: RootReducerType) => state.user.users;

export const getOneUserData = (state: RootReducerType) => state.user.user;
