import { UserSTATE } from "../store/users/user.reducer";
import { TaskState } from "../store/tasks/task.reducer";

export interface Action<P> {
  type: string;
  payload: P;
}

export interface ActionWithoutPayload {
  type: string;
}

export type RootState = {
  readonly users: UserSTATE;
  readonly tasks: TaskState;
};
