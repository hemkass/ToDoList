import styled from "styled-components";
import {
  MainColor,
  FontColor,
  PlaceHolderColor,
  Black,
  DarkGrey,
  Grey1,
} from "@styles/theme";
import { h2, h3 } from "@styles/global.style";
export const TaskBarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export const Title = styled(h2)`
  height: 60px;
  background-color: ${MainColor};
  color: ${FontColor};
  display: flex;
  align-items: center;
  padding-left: 22px;
`;

export const Wrapper = styled.div`
  // background-color: red;
  position: relative;
`;

export const Input = styled.input`
  font-size: 18px;
  width: calc(100% - 22px);
  height: 60px;
  padding-left: 22px;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${PlaceHolderColor};
  }
`;

interface TaskBoxBackground {
  readonly BackgroundColor: number | undefined;
  readonly ActualTask: number | undefined;
}

export const TaskBox = styled.div`
  display: grid;
  width: 100%;
  // width: calc(100% - 22px);
  padding-left: 22px;
  height: 80px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  background-color: ${(props: TaskBoxBackground) =>
    props.BackgroundColor === props.ActualTask ? "#F7F8F9" : "white"};
  // background-color: ${(props) => props.BackgroundColor};
`;

export const CheckBox = styled.input`
  width: 100%;
`;

export const Taskbox_center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TaskBox_wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export interface TextProps {
  readonly text?: string | undefined;
}

export const Task_Title = styled(h2)`
  margin: 0;
  font-weight: 700;
  color: ${Black};
  text-decoration: ${(props: TextProps) => props.text};
`;

export const Task_User = styled.div`
  color: ${DarkGrey};
  text-decoration: ${(props: TextProps) => props.text};
`;

export const WhiteCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid ${Grey1};
`;

export const DoneTasksTitle = styled(h3)`
  color: ${MainColor};
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  // z-index: 100;

  height: 16px;
  left: 7.18%;
  right: 61.88%;
  top: 10px;
  // top: calc(50% - 20px / 2);
`;

export const Box = styled.div`
  position: relative;
`;
export const DoneTasksTitleBox = styled.div`
  background: ${MainColor};
  margin-bottom: 10px;
  widht: 100%;
  height: 36px;
  mix-blend-mode: normal;
  opacity: 0.1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  z-index: 0;
  // position: absolute;
  //   left: 100%;
  //   right: -100%;
  //   top: 0%;
  //   bottom: 0%;
`;

export const WrapperImage = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 50%;
  }
`;
