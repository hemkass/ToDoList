import { userType } from "./user.type";
import { USER_TS } from "../../customTypes/DB.types";
import { Action, ActionWithoutPayload } from "../../customTypes/actions.type";
// export const userType = {
//   ATTRIBUTE_USER: "user/ATTRIBUTE_USER:",
//   GET_USERS: "user/GET_USERS",
//   SET_USERS: "user/SET_USERS",
//   GET_CURRENT_USER: "user/GET_CURRENT_USER",
// };

export type SetUSERaction = Action<USER_TS[]>;
export type GetUSERaction = ActionWithoutPayload;
export type GetCurrentUSERaction = Action<string>;

export const SetUser = (payload: USER_TS[]) => {
  return { type: userType.SET_USERS, payload: payload };
};

export const FetchTheUsers = () => {
  return { type: userType.GET_USERS };
};

export const GetCurrentUser = (emailUser: string) => {
  return { type: userType.GET_CURRENT_USER, payload: emailUser };
};
export const SetCurrentUser = (emailUser: string) => {
  return { type: userType.SET_CURRENT_USER, payload: emailUser };
};
