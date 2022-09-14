import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import {
  TaskBox,
  Taskbox_center,
  Task_Title,
  Task_User,
  WhiteCircle,
  TaskBox_wrapper,
} from "./TaskBar.style";
import { CurrentTask } from "../../store/tasks/task.action";
import Selected from "../../asset/Selected.png";
// import { DeleteTask } from "../../store/tasks/task.action";
import { CurrentTaskaction } from "../../store/tasks/task.action";
import { useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "@utils/functions";
import { ConvertMyDate } from "@utils/functions";
import { myTask } from "../../store/tasks/task.selector";
import { useSelector } from "react-redux";
import { Task_TS } from "@customTypes/DB.types";
import { Dispatch } from "redux";
const TaskCard = ({ task }: { task: Task_TS }) => {
  const [BackgroundTask, setBackgroundTask] = useState(0);

  const currentTask = useSelector(myTask);

  const dispatch: Dispatch = useDispatch();

  const HandleOpenningTask = (elem: Task_TS) => {
    setBackgroundTask(elem.taskid);
    dispatch<CurrentTaskaction>(CurrentTask(elem));
  };

  return (
    <TaskBox
      onClick={() => {
        HandleOpenningTask(task);
      }}
      onBlur={() => {
        setBackgroundTask(0);
      }}
      ActualTask={currentTask?.taskid}
      BackgroundColor={BackgroundTask}
    >
      {!task?.picture ? (
        <WhiteCircle>
          {task.done === true && (
            <Image
              src={Selected}
              width={50}
              height={50}
              alt="selected task"
            ></Image>
          )}
        </WhiteCircle>
      ) : (
        <div></div> // pour la photo du user
      )}
      <TaskBox_wrapper>
        <Taskbox_center>
          {task.done === false ? (
            <Task_Title>
              {/* {capitalizeFirstLetter(task?.item)} */}{" "}
              {capitalizeFirstLetter(task?.item)}
            </Task_Title>
          ) : (
            <Task_Title text="line-through">
              {/* {capitalizeFirstLetter(task?.item)} */}
              {capitalizeFirstLetter(task?.item)}
            </Task_Title>
          )}

          {task.done === false ? (
            task?.owner?.username && task?.owner?.username.length > 1 ? (
              <Task_User>{task.owner.username}</Task_User>
            ) : (
              <Task_User>User Name</Task_User>
            )
          ) : task?.owner?.username && task?.owner?.username.length > 1 ? (
            <Task_User>{task.owner.username}</Task_User>
          ) : (
            <Task_User text="line-through">User Name</Task_User>
          )}
        </Taskbox_center>{" "}
        {task.deadline ? (
          <div>{ConvertMyDate(task.deadline)}</div>
        ) : (
          <div></div>
        )}
      </TaskBox_wrapper>
    </TaskBox>
  );
};

export default TaskCard;
