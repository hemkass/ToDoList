import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import profile from "../../asset/profile.png";
import { ModifyTask } from "@store/tasks/task.action";
import { isEmpty } from "@utils/functions";
import { USER_TS } from "@customTypes/DB.types";
import { RootState } from "@customTypes/actions.type";
import { Dispatch, SetStateAction } from "react";
import { WhiteCircle } from "@components/Taskbar/TaskBar.style";
import {
  WrapperImage,
  UserBox,
  UserName,
  UserEmail,
} from "./DetailledTask.style";
import { myTask } from "../../store/tasks/task.selector";

const UserList = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const currentTask = useSelector(myTask);

  const users = useSelector((state: RootState) => {
    return state.users.usersList;
  });

  const handleAttributeUser = (user: USER_TS) => {
    if (currentTask) {
      console.log("user from compoenet", user);
      dispatch(ModifyTask({ user: user, task: currentTask }));
      setModal(false);
    }
  };

  return !isEmpty(users) ? (
    <>
      {users.map((user, index) => {
        return (
          <UserBox
            key={index}
            onClick={() => {
              handleAttributeUser(user);
            }}
          >
            <WhiteCircle>
              {/* <WrapperImage> */}
              <Image
                width={50}
                height={50}
                src={profile}
                className="ProfileImage"
              />
              {/* </WrapperImage> */}
            </WhiteCircle>
            <div>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </div>
          </UserBox>
        );
      })}
    </>
  ) : (
    <div>En chargement</div>
  );
};

export default UserList;
