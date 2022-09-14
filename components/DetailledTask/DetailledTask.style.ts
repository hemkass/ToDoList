import styled from "styled-components";
import { h4, h3 } from "@styles/global.style";
import {
  Grey1,
  DarkGrey,
  LightGrey,
  Background,
  Grey2,
  MainColor,
  Black2,
  Grey3,
} from "../../styles/theme";
import { Input } from "@components/Taskbar/TaskBar.style";
export const BackgroundDetailled = styled.div`
  position: relative;
  background-color: ${Background};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${LightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 22px;
`;

export const Title = styled.h1`
  width: 50%;
  color: ${DarkGrey};
`;

export const DeadlineBox = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 22px;
  gap: 20px;
`;
export const DeadlineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 148px;
  height: 42px;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InputTitle = styled(Input)`
  background-color: ${LightGrey};
  width: 100%;
`;

export const Buttonspan = styled(h4)`
  color: ${Grey1};
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.4em;
`;
// export const DeadlineImg = styled.img`
//   width: 100%;
//   height: 100%;
//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// `;

export const DescriptionButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskDoneButton = styled.button`
  height: 32px;

  width: 180px;
  margin-right: 30px;
  border: 1px solid ${Background};
  color: ${Grey2};
  font-size: 12px;
  line-height: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DecriptionBox = styled.div`
  background-color: white;
  border: 1px solid ${Background};
  display: flex;
  align-self: center;
  width: 95%;

  flex-direction: column;
`;

export const DecriptionTitleBox = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
`;

export const DecriptionTitle = styled(h3)`
  padding-left: 22px;
  font-weight: 500;
  color: ${DarkGrey};
`;

export const DecriptionAreaBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const DecriptionArea = styled.textarea`
  width: 90%;
  padding-left: 22px;
  font-weight: 500;
  background: #ffffff;
  border: 1px solid #e4e8eb;
  border-radius: 2px;
  padding-bottom: 30px;
  margin-bottom: 10px;
`;

export const CommentBox = styled.div`
  height: 60px;
  width: calc(100%-22px);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid ${Background};
  padding-right: 22px;
`;

export const CommentButton = styled.button`
  height: 32px;
  background-color: ${MainColor};
  width: 120px;

  border: 1px solid ${Background};
  color: white;
  font-size: 12px;
  line-height: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const Profile = styled.Image`
//   width: 40px;
//   height: 40px;

//   border-radius: 50px;
//   border: 1px solid ${Grey1};
// `;

export const WrapperImage = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50px;
  border: 1px solid ${Grey1};
`;

export const UsersBox = styled.div`
  
  position: absolute;
  width: 350px;
  height: max-content
  left: 22px;
  top: 140px;
  background: #ffffff;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
`;

export const DateBox = styled.div`
  position: absolute;
  width: 350px;
  height: max-content;
  left: 22px;
  top: 140px;
  background: #ffffff;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
`;

export const IconBox = styled.div`
  position: absolute;
  right: 20px;

  width: 20px;
`;

export const UserBox = styled.div`
  height: 60px;
  padding: 15px;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${Background};
  padding-right: 22px;
  gap: 22px;
`;

export const UserName = styled(h4)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${Black2};
`;

export const UserEmail = styled(h4)`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${Grey3};
  mix-blend-mode: normal;
  opacity: 0.8;
`;
