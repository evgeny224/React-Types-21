import { UserActionType } from "./actions";

export type ReducerType = {
  users: OneUserType[];
  user: OneUserType;
};
export type OneUserType = {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: {
    street?: string;
    suite?: string;
    city: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website?: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
};
export type oneUserFetchEditingAction = {
  type: UserActionType.fetchOneUserData;
  payload: OneUserType;
};
export type userFetchEditingAction = {
  type: UserActionType.fetchUsersData;
  payload: OneUserType[];
};
export type ActionsType = oneUserFetchEditingAction | userFetchEditingAction;
