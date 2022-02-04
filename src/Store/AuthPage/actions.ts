/* eslint-disable no-unused-vars */
export enum UserAuthActionType {
  userAuth = "USER_AUTENTIFICATION",
}

export const UserAuthActionCreator = (UserAuth: any) => {
  return {
    type: UserAuthActionType.userAuth,
    payload: UserAuth,
  };
};
