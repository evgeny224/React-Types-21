import { UserAuthActionType } from "./actions";

export type ReducerType = {
  authUsers: AuthType[];
  authUser: AuthType;
};

export type AuthType = {
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

export type authUserAction = {
  type: UserAuthActionType.userAuth;
  payload: AuthType;
};

export type authUsersAction = {
  type: UserAuthActionType.usersAuth;
  payload: AuthType[];
};
export type ActionsType = authUserAction | authUsersAction;
