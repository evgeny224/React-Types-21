/* eslint-disable no-unused-vars */
import { Dispatch } from "react";
import { makeUserPhoto } from "../../Network";
import { nonePhotoType, PhotoType, userFetchPhotoAction } from "./types";

export enum UserPhotoActionType {
  userPhoto = "USER_PHOTO",
  usersPhotos = "USERS_PHOTO",
  noneUserPhoto = "NONE_USER_PHOTO",
}

export const nonePhotoUserActionCreator = (action: nonePhotoType) => {
  return {
    type: UserPhotoActionType.noneUserPhoto,
    payload: action,
  };
};

export const onePhotoUserActionCreator = (action: PhotoType) => {
  return {
    type: UserPhotoActionType.userPhoto,
    payload: action,
  };
};

export const getUserPhotoActionCreator = () => {
  return async (dispatch: Dispatch<userFetchPhotoAction>) => {
    const data = await makeUserPhoto({ url: "users" });
    dispatch({
      type: UserPhotoActionType.usersPhotos,
      payload: data,
    });
  };
};
