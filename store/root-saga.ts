import { all, fork } from "redux-saga/effects";
import { watchUsersSagas } from "@store/users/users.sagas";
import { watchTasksSagas } from "@store/tasks/tasks.sagas";

export function* rootSaga() {
  yield all([fork(watchTasksSagas)]);
  yield all([fork(watchUsersSagas)]);
}
