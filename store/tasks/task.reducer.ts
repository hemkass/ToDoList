// import { types } from "./task.action";
import { types } from "./task.types";
import { Task_TS } from "@customTypes/DB.types";
import { Reducer } from "redux";

export type TaskState = {
  tasksList: Task_TS[];
  MyCurrentTask?: Task_TS;
  error: string;
};

const initialState = {
  tasksList: [],
  // MyCurrentTask:{},
  error: "",
};

export const TaskReducer: Reducer<TaskState> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    //  --------------------------------------------------

    case types.ADD_TASK:
      return {
        ...state,
        tasksList: [...state.tasksList, payload],
      };

    //  --------------------------------------------------
    case types.GET_TASKS:
      if (payload) {
        return {
          ...state,
          MyCurrentTask: payload,
        };
      }
    //  --------------------------------------------------

    case types.SET_All_TASKS:
      if (payload) {
        return {
          ...state,
          tasksList: payload,
        };
      }
    //  --------------------------------------------------
    case types.CURRENT_TASK:
      return {
        ...state,
        MyCurrentTask: payload,
      };
    //  --------------------------------------------------

    case types.DELETE_TASK:
      const taskToDelete = state.tasksList.find((elem) => {
        // console.log("mon elme ==>", elem);
        return elem.taskid === payload.taskid;
      });
      // console.log("mon truc q effacer ===>", taskToDelete);
      // console.log("mon truc payload ===>", payload);

      if (taskToDelete) {
        const index = state.tasksList.indexOf(taskToDelete);
        // console.log("mon index ===>", index);

        return {
          ...state,
          tasksList: [
            ...state.tasksList.slice(0, index),
            ...state.tasksList.slice(index + 1),
          ],
        };
      }
      return {
        ...state,
        error: "Delete echec",
      };

    //  --------------------------------------------------

    case types.SET_NEW_TASK:
      if (payload) {
        const NewTask = {
          item: payload.item.toString(),

          done: false,
          taskid: Number(payload.taskid),

          deadline: "",
          description: "Write something please",
          owner: Number(payload.owner),
          creator: Number(payload.creator),
        };

        return {
          ...state,

          MyCurrentTask: NewTask,
          tasksList: [...state.tasksList, NewTask],
        };
      } else {
        return {
          ...state,
          error: "set task echec",
        };
      }
    //  --------------------------------------------------

    case types.MODIFY_TASK:
      console.log("mon utilisateur", payload.user);
      const FindMyTask = state.MyCurrentTask;

      if (FindMyTask) {
        if (payload.date) {
          FindMyTask.deadline = payload.date;
        }

        if (payload.donetask) {
          FindMyTask.done = payload.donetask;
        }
        if (payload.description) {
          FindMyTask.description = payload.description;
        }

        if (payload.item) {
          FindMyTask.item = payload.item;
        }

        if (payload.user) {
          FindMyTask.username = payload.user.username;
          FindMyTask.email = payload.user.email;
          FindMyTask.name = payload.user.name;
        }

        return {
          ...state,

          MyCurrentTask: FindMyTask,
        };
      }
      return {
        ...state,
        error: "MODIFY_TASK",
      };
    //  --------------------------------------------------

    case types.CURRENT_TASK:
      return {
        ...state,
        MyCurrentTask: payload,
      };
    //  --------------------------------------------------

    case types.UPDATE_TASK:
      return {
        ...state,
        MyCurrentTask: payload,
      };
    //  --------------------------------------------------

    case types.SET_UPDATED_TASK:
      const findUpdatedTask = state.tasksList.find((elem) => {
        return elem.taskid === payload.taskid;
      });

      if (findUpdatedTask) {
        findUpdatedTask.item = payload.item;
        findUpdatedTask.done = payload.done;
        findUpdatedTask.deadline = payload.deadline;
        findUpdatedTask.description = payload.description;
        findUpdatedTask.owner = payload.owner;

        const index = state.tasksList.indexOf(findUpdatedTask);

        return {
          ...state,

          tasksList: [
            ...state.tasksList.slice(0, index),
            findUpdatedTask,
            ...state.tasksList.slice(index + 1),
          ],

          MyCurrentTask: findUpdatedTask,
        };
      }
      return {
        ...state,
        error: "error SET UPDATE",
      };
    //  --------------------------------------------------

    default:
      return state;
  }
};
