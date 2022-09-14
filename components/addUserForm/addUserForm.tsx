import axios from "axios";
import { GetNumberOfUser } from "../../store/users/user.selector";
import {
  FormBox,
  Wrapper,
  Input_Box,
  Input,
  Title,
  Input_wrapper,
} from "./addUserForm.style";
import {
  CommentButton,
  CommentBox,
} from "../DetailledTask/DetailledTask.style";
import { useDispatch } from "react-redux";
import { SetUser } from "../../store/users/user.action";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

const AddUserForm = () => {
  const dispatch: Dispatch = useDispatch();
  const userid = useSelector(GetNumberOfUser);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [file, setFile] = useState("");
  const [data, setData] = useState(false);
  const SendMyUser = async (newUser) => {
    try {
      const response = await axios.post("/api/createUser", {
        user: newUser,
        headers: { "content-type": "application/json" },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      username: username,
      name: name,
      email: email,
      password: password,
    };
    SendMyUser(newUser);
    if (data) {
      dispatch(SetUser(data));
    }
    setEmail("");
    setName("");
    setUsername("");
  };
  return (
    <Wrapper>
      <Title>AJOUTER UN UTILISATEUR</Title>
      <FormBox onSubmit={HandleSubmit}>
        <Input_wrapper>
          <Input_Box>
            <label htmlFor="username">Name </label>
            <Input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              type="text"
            ></Input>
          </Input_Box>
        </Input_wrapper>
        <Input_wrapper>
          <Input_Box>
            <label htmlFor="username">Username </label>
            <Input
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
            ></Input>
          </Input_Box>
          <Input_Box>
            <label htmlFor="email">Email</label>
            <Input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
            ></Input>
          </Input_Box>
          <Input_Box>
            <label htmlFor="password">Password</label>
            <Input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
            ></Input>
          </Input_Box>
        </Input_wrapper>{" "}
        <Input_wrapper></Input_wrapper>
        <CommentBox>
          <CommentButton>Envoyer</CommentButton>
        </CommentBox>
      </FormBox>
    </Wrapper>
  );
};

export default AddUserForm;
