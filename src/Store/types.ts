import { ReducerType as UserReducerType } from "./ProfileEditingPage/types";
import { ReducerType as AuthReducerType } from "./AuthPage/types";

export type RootReducerType = {
  user: UserReducerType;
  auth: AuthReducerType;
};
