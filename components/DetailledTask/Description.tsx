import { useState } from "react";
import { myTask } from "../../store/tasks/task.selector";
import { Task_TS } from "../../customTypes/DB.types";

import { ModifyTask } from "../../store/tasks/task.action";
import {
  DecriptionTitleBox,
  DecriptionTitle,
  DecriptionArea,
  DecriptionAreaBox,
  CommentBox,
  CommentButton,
} from "./DetailledTask.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

const Description = () => {
  const dispatch = useDispatch();
  let currentTask = useSelector(myTask) || {
    item: "",
    description: "",
    deadline: "",
    taskid: 0,
    done: false,
    username: "",
    email: "",
    creator: 0,
    owner: 0,
    name: "",
    picture: "",
  };

  let myDescription = currentTask?.description;

  if (document.getElementById("description")) {
    if (currentTask?.description) {
      (document.getElementById("description") as HTMLInputElement).value =
        myDescription;
    } else {
      (document.getElementById("description") as HTMLInputElement).value =
        "write your text";
    }
  }

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (currentTask) {
      currentTask.description = (event.target as HTMLInputElement).value;

      dispatch(
        ModifyTask({ description: currentTask.description, task: currentTask })
      );
    }
  };

  return (
    <>
      <DecriptionTitleBox>
        <div></div>
        <DecriptionTitle>Description</DecriptionTitle>
      </DecriptionTitleBox>

      <DecriptionAreaBox>
        <DecriptionArea
          // value={currentTask.description}
          onInput={handleChange}
          name="description"
          id="description"
          rows={10}
          cols={30}
          autoFocus
        ></DecriptionArea>
      </DecriptionAreaBox>
      <CommentBox>
        <CommentButton>UPDATE TASK</CommentButton>
      </CommentBox>
    </>
  );
};

export default Description;
