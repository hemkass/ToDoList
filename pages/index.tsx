import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import TaskBar from "@components/Taskbar/Taskbar";
import Header from "@components/Header/Header";
import DetailledTask from "@components/DetailledTask/DetailledTask";
import { Main } from "../styles/theme";
import { useSession } from "next-auth/react";

import LogInForm from "../components/addUserForm/LogInForm";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      {" "}
      <Head>
        <title>My to do List</title>
        <meta name="description" content="Just to put some tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {session ? (
        <Main>
          <TaskBar />
          <DetailledTask />
        </Main>
      ) : (
        <LogInForm />
      )}
    </div>
  );
};

export default Home;
