import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConvertMyDate } from "@utils/functions";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  DeadlineButton,
  DateBox,
  IconBox,
  Buttonspan,
} from "./DetailledTask.style";

import "react-day-picker/dist/style.css";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Task_TS } from "@customTypes/DB.types";

import { useDispatch } from "react-redux";

import { ModifyTask } from "../../store/tasks/task.action";

import deadline from "../../asset/deadline.svg";

import { useState } from "react";

const DeadlineButtonComp = ({ currentTask }: { currentTask: Task_TS }) => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #E74C3C;
    color:#E74C3C
  }
  .my-selected:hover:not([disabled]) { 
    border-color: black;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #E74C3C;
  }
`;
  const dispatch = useDispatch();

  const handleDate = (date: Date | undefined) => {
    console.log("ma date ====>", date);
    if (currentTask) {
      dispatch(ModifyTask({ date: date, task: currentTask }));
    }

    setSelected(null);
  };

  const [selected, setSelected] = useState<null | Date>(null);

  return (
    <>
      <DeadlineButton
        type="button"
        onClick={() => {
          setSelected(new Date());
        }}
      >
        {currentTask.deadline ? (
          <Buttonspan> {ConvertMyDate(currentTask.deadline)}</Buttonspan>
        ) : (
          <Image src={deadline} alt="Bouton échéance" layout="fill"></Image>
        )}
      </DeadlineButton>{" "}
      {selected && (
        <DateBox>
          <IconBox>
            <FontAwesomeIcon
              className="icone"
              icon={faXmark as IconProp}
              onClick={() => {
                setSelected(null);
              }}
            />
          </IconBox>
          <style>{css}</style>
          <DayPicker
            className="dayPicker"
            mode="single"
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
            modifiersStyles={{
              disabled: { fontSize: "75%" },
            }}
            selected={selected}
            onSelect={handleDate}
          />
        </DateBox>
      )}
    </>
  );
};

export default DeadlineButtonComp;
