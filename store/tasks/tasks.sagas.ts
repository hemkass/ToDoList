import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  UPDATE_TASKaction,
  DELETE_TASKaction,
  CreateTaskAction,
  GetTaskaction,
} from "./task.action";
import { types } from "./task.types";
import { userType } from "../users/user.type";
import { ResponseGenerator } from "@store/users/users.sagas";
import { Task_TS } from "@customTypes/DB.types";
import { ModifyTaskPayload } from "@customTypes/DB.types";

export interface ResponseGeneratorTaskArray {
  config?: any;
  data: Task_TS[];
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* fetchtasks(action: GetTaskaction) {
  try {
    console.log("ce que je reçois pour mes tâches", action.payload);
    const response: ResponseGeneratorTaskArray = yield call(
      axios.post,
      "/api/getTasks",
      { payload: action.payload }
    );

    yield put({
      type: types.SET_All_TASKS,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* DeleteTaskFromBDD(action: DELETE_TASKaction) {
  // console.log("je suis dans ma saga", payload);
  try {
    const response: ResponseGenerator = yield call(
      axios.post,
      "/api/deleteTask",
      { payload: action.payload }
    );
  } catch (error) {
    yield console.log(error);
  }
}

export function* CreateNewTaskinBDD(action: CreateTaskAction) {
  // console.log("je suis dans ma saga", payload);
  try {
    const response: ResponseGenerator = yield call(
      axios.post,
      "/api/createTask",
      { payload: action.payload }
    );
    // console.log("mes taches updatées", response.data);
    yield put({
      type: types.SET_NEW_TASK,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* updateTaskSaga(action: UPDATE_TASKaction) {
  console.log("je suis dans ma saga et la bonne", action.payload);
  try {
    const response: ResponseGenerator = yield call(
      axios.post,
      "/api/updateTask",
      { payload: action.payload }
    );
    console.log("mes taches updatées", response.data.taskid);
    yield put({
      type: types.SET_UPDATED_TASK,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchTasksSagas() {
  yield all([takeLatest(userType.GET_CURRENT_USER, fetchtasks)]);

  yield all([takeLatest(types.ADD_TASK, CreateNewTaskinBDD)]);
  yield all([takeLatest(types.UPDATE_TASK, updateTaskSaga)]);
  // yield all([takeLatest(types.ADD_OWNER, setUserToATask)]);
  // yield all([takeLatest(types.MODIFY_TASK, ModifyTaskSaga)]);
  yield all([takeLatest(types.DELETE_TASK, DeleteTaskFromBDD)]);
}
