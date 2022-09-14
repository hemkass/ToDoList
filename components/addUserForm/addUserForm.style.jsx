import styled from "styled-components";
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
import { h1 } from "@styles/global.style";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;

  gap: 20px;
`;
export const Input_wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid ${Background};
`;

export const Input_Box = styled.div`
  display: flex;
  gap: 20px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
`;

export const Title = styled(h1)`
  color: ${MainColor};
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
