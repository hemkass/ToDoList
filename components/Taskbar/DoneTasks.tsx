import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { RootState } from "@customTypes/actions.type";
const DoneTasks = () => {
  const taskList = useSelector((state: RootState) => {
    return state.tasks.tasksList;
  });
  // console.log("mes taches", taskList[0].item);

  return (
    <div>
      {taskList.length > 0 &&
        taskList?.map((task, index) => {
          if (task?.done === true) {
            return (
              <div key={task.taskid}>
                <TaskCard task={task} />
              </div>
            );
          }
        })}
    </div>
  );
};

export default DoneTasks;
