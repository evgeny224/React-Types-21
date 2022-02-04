/* eslint-disable import/prefer-default-export */
import { ReducerType } from "./types";

// export type ProfileType = {
//   user: {
//     name: string;
//     callSign: string;
//     email: string;
//     birthDate: string;
//     family: string;
//     city: string;
//   };
// };
export const getUserData = (state: ReducerType) => state.user;
