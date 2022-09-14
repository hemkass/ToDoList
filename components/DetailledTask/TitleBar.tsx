// import { Input } from "@components/Taskbar/TaskBar.style";
import "react-day-picker/dist/style.css";

import "react-day-picker/dist/style.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { ModifyTask } from "../../store/tasks/task.action";
import { DeleteTask } from "../../store/tasks/task.action";

import { Dispatch } from "redux";
import { capitalizeFirstLetter } from "@utils/functions";

import { RootState } from "@customTypes/actions.type";
import { DELETE_TASKaction } from "@store/tasks/task.action";

import {
  TitleBox,
  Title,
  TaskDoneButton,
  DescriptionButtonBox,
  InputTitle,
} from "./DetailledTask.style";

const TitleBar = () => {
  const dispatch = useDispatch();

  const currentTask = useSelector((state: RootState) => {
    return state.tasks.MyCurrentTask;
  });

  if (document.getElementById("title")) {
    if (currentTask?.item) {
      let myTitle = currentTask?.item;
      (document.getElementById("title") as HTMLInputElement).value =
        capitalizeFirstLetter(myTitle);
    } else {
      (document.getElementById("title") as HTMLInputElement).value =
        "write your text";
    }
  }

  const handleTitle = (event: React.FormEvent<HTMLInputElement>) => {
    if (currentTask) {
      currentTask.item = (event.target as HTMLInputElement).value;
      dispatch(ModifyTask({ item: currentTask.item, task: currentTask }));
    }
  };

  const handleEndTask = () => {
    if (currentTask) {
      dispatch(ModifyTask({ task: currentTask, donetask: true }));
    }
  };

  const handleSuppress = () => {
    if (currentTask) {
      dispatch<DELETE_TASKaction>(DeleteTask(currentTask));
    }
  };

  return (
    <TitleBox>
      <Title>
        <InputTitle
          id="title"
          name="title"
          type="text"
          onChange={handleTitle}
        ></InputTitle>
      </Title>
      <DescriptionButtonBox>
        <TaskDoneButton onClick={handleSuppress} type="button">
          Supprimer la tâche
        </TaskDoneButton>
        <TaskDoneButton onClick={handleEndTask} type="button">
          marqué comme terminé{" "}
        </TaskDoneButton>
      </DescriptionButtonBox>
    </TitleBox>
  );
};

export default TitleBar;
