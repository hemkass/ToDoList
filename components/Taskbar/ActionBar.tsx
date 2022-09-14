import { useState } from "react";
import { Input } from "@components/Taskbar/TaskBar.style";
import { useDispatch } from "react-redux";
import { AddNewTask } from "store/tasks/task.action";
import { Dispatch } from "redux";
import { ADD_TASKaction } from "../../store/tasks/task.action";
import { useSession } from "next-auth/react";
import { MycurrentUser } from "@store/users/user.selector";
import { useSelector } from "react-redux";

const AddTask = () => {
  const { data: session } = useSession();
  const dispatch: Dispatch = useDispatch();

  const currentUser = useSelector(MycurrentUser);
  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentUser) {
      dispatch<ADD_TASKaction>(
        AddNewTask({
          item: task,
          done: false,
          creatorEmail: currentUser,
          description: "Write something please",
        })
      );
    }
    setTask("");
  };

  const [task, setTask] = useState("");
  return (
    <>
      <form onSubmit={handleAddTask}>
        <Input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
          placeholder="+ ajouter une tâche"
        ></Input>
      </form>
    </>
  );
};

export default AddTask;
