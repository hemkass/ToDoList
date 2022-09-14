import { RootState } from "@customTypes/actions.type";
import { Task_TS } from "@customTypes/DB.types";
export const myTask = (state: RootState) => {
  return state.tasks.MyCurrentTask;
};
