import { types } from "./task.types";
import { Action, ActionWithoutPayload } from "../../customTypes/actions.type";
import {
  ADD_TASK_PAYLOAD,
  SET_TASK_PAYLOAD,
  Task_TS,
  ModifyTaskPayload,
} from "../../customTypes/DB.types";

export type ADD_TASKaction = Action<ADD_TASK_PAYLOAD>;
export type GetTaskaction = Action<string>;
export type SetTaskaction = Action<Task_TS[]>;
export type CurrentTaskaction = Action<Task_TS>;
export type DELETE_TASKaction = Action<Task_TS>;
export type UPDATE_TASKaction = Action<Task_TS>;
export type CreateTaskAction = Action<ADD_TASK_PAYLOAD>;

export const AddNewTask = (task: ADD_TASK_PAYLOAD): ADD_TASKaction => {
  return { type: types.ADD_TASK, payload: task };
};

export const SetNewTaskReduicer = (payload: SET_TASK_PAYLOAD) => {
  // console.log("AddDate =====>", payload);
  return { type: types.SET_NEW_TASK, payload };
};

export const GetTask = (): ActionWithoutPayload => {
  // console.log("je suis dans mes actions", payload);
  return { type: types.GET_TASKS };
};

export const SetAllTasks = (payload: Task_TS[]) => {
  // console.log("je suis dans mes actions", payload);
  return { type: types.SET_All_TASKS, payload };
};

export const CurrentTask = (payload: Task_TS) => {
  return { type: types.CURRENT_TASK, payload };
};

export const DeleteTask = (payload: Task_TS) => {
  return { type: types.DELETE_TASK, payload };
};

export const ModifyTask = (payload: ModifyTaskPayload) => {
  return { type: types.MODIFY_TASK, payload };
};

export const UpdateTask = (payload: Task_TS) => {
  console.log("payload action", payload);
  return { type: types.UPDATE_TASK, payload };
};
export const SetUpdatedTaskReduicer = (payload: Task_TS) => {
  return { type: types.SET_UPDATED_TASK, payload };
};
