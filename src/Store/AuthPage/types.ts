import { UserAuthActionType } from "./actions";

export type ReducerType = {
  auth: AuthType;
};

export type AuthType = {
  login: string;
  password: string;
};

export type authUserAction = {
  type: UserAuthActionType.userAuth;
  payload: AuthType;
};
