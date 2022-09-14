import { userType } from "./user.type";
import { USER_TS } from "../../customTypes/DB.types";
import { Reducer } from "redux";

export type UserSTATE = {
  readonly usersList: USER_TS[];
  readonly myCurrentUser?: USER_TS;
  readonly UserEmail?: string;
};

const initialState = { usersList: [], UserEmail: "" };

export const userReducer: Reducer<UserSTATE> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case userType.GET_USERS:
      return { ...state };

    case userType.SET_USERS:
      return { ...state, usersList: payload };

    case userType.GET_CURRENT_USER:
      console.log("je passe par le reduicer");
      return { ...state, myCurrentUser: payload };
    // case userType.SET_CURRENT_USER:
    //    console.log("je passe par le reduicer");
    //   return { ...state, myCurrentUser: payload };

    default:
      return state;
  }
};
