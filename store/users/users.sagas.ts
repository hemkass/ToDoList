import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { userType } from "./user.type";
import { GetCurrentUSERaction } from "./user.action";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* FetchTheUsers() {
  // console.log("jesuis dans ma saga");
  try {
    const response: ResponseGenerator = yield call(axios.get, "/api/GetUser");
    // console.log("je receptionne mes user dans saga", response.data);
    yield put({
      type: userType.SET_USERS,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* fetchCurrentUser(action: GetCurrentUSERaction) {
  try {
    console.log("GET CURRENT USER PAYLOAD");
    const response: ResponseGenerator = yield call(
      axios.post,
      "/api/GetCurrentUSer",
      { payload: action.payload }
    );
    // console.log("jesuis dans ma saga current", response.data);
    yield put({
      type: userType.SET_CURRENT_USER,
      payload: response.data,
    });
  } catch (error) {
    yield console.log(error);
  }
}

export function* watchUsersSagas() {
  yield all([takeLatest(userType.GET_USERS, FetchTheUsers)]);
}
