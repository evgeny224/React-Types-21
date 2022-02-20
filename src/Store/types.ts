import { ReducerType as UserReducerType } from "./ProfileEditingPage/types";
import { ReducerType as AuthReducerType } from "./AuthPage/types";
import { ReducerType as PhotoReducerType } from "./UserPhoto/types";

export type RootReducerType = {
  user: UserReducerType;
  auth: AuthReducerType;
  photo: PhotoReducerType;
};
