import { combineReducers } from "redux";
import { TaskReducer } from "./tasks/task.reducer";

import { userReducer } from "./users/user.reducer";

export const rootReducer = combineReducers({
  tasks: TaskReducer,
  users: userReducer,
});
