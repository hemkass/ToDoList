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

import { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { signIn } from "next-auth/react";

const AddUserForm = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { error } = useRouter().query;

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [data, setData] = useState(false);
  const { data: session } = useSession();
  console.log("ma session", session);

  useEffect(() => {
    session && router.push("/");
  }, [session]);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    signIn("credentials", { email: email, password: password });
    // UserLogin(user);
  };

  return (
    <Wrapper>
      <Title>Se connecter</Title>
      <FormBox onSubmit={HandleSubmit}>
        <Input_wrapper>
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
        </Input_wrapper>

        <CommentBox>
          <CommentButton>Se connecter</CommentButton>
        </CommentBox>
      </FormBox>
      {/* {error && <SignInError error={error} />} */}
    </Wrapper>
  );
};

export default AddUserForm;
