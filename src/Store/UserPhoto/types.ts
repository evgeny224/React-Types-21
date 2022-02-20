/* eslint-disable camelcase */

import { UserPhotoActionType } from "./actions";

export type ReducerType = {
  users: PhotoType[];
  user: PhotoType;
};
export type PhotoType = {
  login?: string;
  id: number;
  node_id?: string;
  avatar_url: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
};
export type nonePhotoType = {};

export type noneUserFetchPhotoAction = {
  type: UserPhotoActionType.noneUserPhoto;
  payload: PhotoType;
};

export type oneUserFetchPhotoAction = {
  type: UserPhotoActionType.userPhoto;
  payload: PhotoType;
};
export type userFetchPhotoAction = {
  type: UserPhotoActionType.usersPhotos;
  payload: PhotoType[];
};
export type ActionsType =
  | oneUserFetchPhotoAction
  | userFetchPhotoAction
  | noneUserFetchPhotoAction;
