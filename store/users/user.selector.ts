import { RootState } from "@customTypes/actions.type";

export const Get5Users = (state: RootState) => {
  return state.users.usersList.slice(0, 5);
};

export const GetNumberOfUser = (state: RootState) => {
  return state?.users?.usersList?.length + 1;
};

export const MycurrentUser = (state: RootState) => {
  return state.users.myCurrentUser;
};
