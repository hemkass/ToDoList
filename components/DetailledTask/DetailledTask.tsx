import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConvertMyDate } from "@utils/functions";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  TitleBox,
  Title,
  TaskDoneButton,
  BackgroundDetailled,
  DecriptionBox,
  DescriptionButtonBox,
  DeadlineBox,
  DeadlineButton,
  UsersBox,
  DateBox,
  IconBox,
  Buttonspan,
  InputTitle,
} from "./DetailledTask.style";
// import { Input } from "@components/Taskbar/TaskBar.style";
import "react-day-picker/dist/style.css";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { DeleteTask } from "../../store/tasks/task.action";
import { ModifyTask } from "../../store/tasks/task.action";
import { FetchTheUsers } from "../../store/users/user.action";

import Description from "./Description";
import AttributeButton from "./AttributeButton";

import UserList from "./UserList";
import DeadlineButtonComp from "./DeadlineButtonComp";
import deadline from "../../asset/deadline.svg";

import { Dispatch } from "redux";

import React, { useState, useEffect } from "react";
import { GetUSERaction } from "../../store/users/user.action";
import { RootState } from "@customTypes/actions.type";
import { DELETE_TASKaction } from "@store/tasks/task.action";
import { UpdateTask } from "../../store/tasks/task.action";

import TitleBar from "./TitleBar";

const DetailledTask = () => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #E74C3C;
    color:#E74C3C
  }
  .my-selected:hover:not([disabled]) { 
    border-color: black;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #E74C3C;
  }
`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTheUsers());
  }, []);

  const [selected, setSelected] = useState<null | Date>(null);

  const [modal, setModal] = useState<boolean>(false);

  const currentTask = useSelector((state: RootState) => {
    return state.tasks.MyCurrentTask;
  });

  const handlenewUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("j'envoie le formulaire");
    if (currentTask) {
      dispatch(UpdateTask(currentTask));
    }
  };

  const handleDate = (date: Date | undefined) => {
    console.log("ma date ====>", date);
    if (currentTask) {
      dispatch(ModifyTask({ date: date, task: currentTask }));
    }

    setSelected(null);
  };

  if (currentTask) {
    return (
      <BackgroundDetailled>
        <form onSubmit={handlenewUpdate} action="" method="get">
          <TitleBar />
          <DeadlineBox>
            <AttributeButton
              modal={modal}
              setModal={setModal}
              currentTask={currentTask}
            />
            <DeadlineButtonComp currentTask={currentTask} />
          </DeadlineBox>
          {modal && (
            <UsersBox>
              <UserList setModal={setModal} />
            </UsersBox>
          )}
          <DecriptionBox>
            <Description />
          </DecriptionBox>
        </form>
      </BackgroundDetailled>
    );
  } else {
    return <BackgroundDetailled></BackgroundDetailled>;
  }
};

export default DetailledTask;
