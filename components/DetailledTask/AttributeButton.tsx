import Image from "next/image";
import { DeadlineButton, Buttonspan } from "./DetailledTask.style";
import attribue from "../../asset/attribué.svg";
import React, { useState } from "react";
import { Task_TS } from "@customTypes/DB.types";

const AttributeButton = ({
  currentTask,
  setModal,
  modal,
}: {
  currentTask: Task_TS;
  setModal: (value: boolean) => void;
  modal: boolean;
}) => {
  return (
    <DeadlineButton
      type="button"
      onClick={() => {
        setModal(!modal);
      }}
    >
      {currentTask.username ? (
        <Buttonspan>{currentTask.username}</Buttonspan>
      ) : (
        <Image
          alt="Bouton attribué"
          // layout="fill"
          // width="148px"
          // height="42px"
          src={attribue}
          priority
        ></Image>
      )}
    </DeadlineButton>
  );
};

export default AttributeButton;
