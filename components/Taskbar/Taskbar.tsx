import {
  Title,
  TaskBarBox,
  Wrapper,
  DoneTasksTitleBox,
  DoneTasksTitle,
  Box,
} from "./TaskBar.style";

import ActionBar from "./ActionBar";
import Tasks from "./Tasks";
import DoneTasks from "./DoneTasks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GetCurrentUser } from "../../store/users/user.action";
import { useSession } from "next-auth/react";
import { myTask } from "../../store/tasks/task.selector";
import { GetCurrentUSERaction } from "../../store/users/user.action";
import { Dispatch } from "redux";
const TaskBar = () => {
  const currentTask = useSelector(myTask);
  const dispatch: Dispatch = useDispatch();

  const { data: session } = useSession();
  // if (session && session.user && session.user.email) {
  //   const CurrentUser = session?.user?.email;

  //   dispatch<GetCurrentUSERaction>(GetCurrentUser(CurrentUser));
  // }
  // useEffect(() => {
  //   dispatch(GetCurrentUser(CurrentUser));
  // }, [CurrentUser, currentTask]);

  return (
    <TaskBarBox>
      <Title>Toutes les tâches</Title>
      <Wrapper>
        <ActionBar />
        <Tasks />
        <Box>
          <DoneTasksTitle>Tâches terminées</DoneTasksTitle>
        </Box>
        <DoneTasksTitleBox>
          <DoneTasksTitle>Tâches terminées</DoneTasksTitle>
        </DoneTasksTitleBox>{" "}
        <DoneTasks />
      </Wrapper>
    </TaskBarBox>
  );
};

export default TaskBar;
