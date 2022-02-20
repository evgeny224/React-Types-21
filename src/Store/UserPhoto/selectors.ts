import { RootReducerType } from "../types";

export const getPhotoUserData = (state: RootReducerType) => state.photo.user;

export const getPhotoUsersData = (state: RootReducerType) => state.photo.users;
