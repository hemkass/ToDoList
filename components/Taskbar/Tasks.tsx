import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { GetTask } from "../../store/tasks/task.action";
import { GetCurrentUser } from "../../store/users/user.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { myTask } from "../../store/tasks/task.selector";
import { RootState } from "@customTypes/actions.type";
import { Dispatch } from "redux";
import { GetCurrentUSERaction } from "../../store/users/user.action";

const Tasks = () => {
  const { data: session } = useSession();
  const CurrentUser = session?.user?.email;

  const dispatch: Dispatch = useDispatch();
  const currentTask = useSelector(myTask);

  if (session && session.user && session.user.email) {
    const CurrentUser = session?.user?.email;
    useEffect(() => {
      dispatch(GetCurrentUser(CurrentUser));
    }, [CurrentUser, currentTask]);
    // dispatch<GetCurrentUSERaction>(GetCurrentUser(CurrentUser));
  }
  const taskList = useSelector((state: RootState) => {
    return state.tasks.tasksList;
  });

  return (
    <div>
      {taskList?.length > 0 &&
        taskList.map((task, index) => {
          if (task.done === false) {
            return (
              <div key={index}>
                <TaskCard task={task} />
              </div>
            );
          }
        })}
    </div>
  );
};

export default Tasks;
