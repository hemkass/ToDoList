import pool from "../../config/pg";
import { PrismaClient, Prisma } from "@prisma/client";

import { CheckExistingUser } from "../../models/users.models";
import { CheckExistingTask } from "../../models/tasks.models";
// import { UpdateTaskinDB } from "../../models/tasks.models";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const UpdateTaskDB = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("hello");
  if (req.method === "POST") {
    try {
      console.log("je recois a update", req.body.payload);

      const {
        creator,
        deadline,
        description,
        done,
        email,
        item,
        name,
        taskid,
        username,
      } = req.body.payload;
      console.log("mon email", email, taskid);

      const IsTask = await CheckExistingTask(taskid);

      if (IsTask) {
        const taskid = IsTask.taskid;
        if (email) {
          const IsUser = await CheckExistingUser(email);
          if (IsUser) {
            const owner = IsUser.userid;

            let taskUpdatedinDB = await prisma.task.update({
              where: {
                taskid: taskid,
              },
              data: {
                item: item,
                description: description,
                done: done,
                deadline: deadline,
                // ownerId: owner,
                owner: { connect: { userid: owner } },
              },
              include: {
                owner: { select: { email: true, username: true } },
              },
            });

            console.log("BDD De mon update", taskUpdatedinDB);
            res.status(200).json(taskUpdatedinDB);
          }
        }

        // let taskUpdatedinDB = await UpdateTaskinDB(
        //   item,
        //   description,
        //   done,
        //   deadline,
        //   owner,
        //   taskid
        // );
        else {
          let taskUpdatedinDB = await prisma.task.update({
            where: {
              taskid: taskid,
            },
            data: {
              item: item,
              description: description,
              done: done,
              deadline: deadline,
            },
          });
          console.log("result ====>", taskUpdatedinDB);
          res.status(200).json(taskUpdatedinDB);
        }
      } else {
        res.status(405).json({ message: "error, tache non modifiée" });
      }
    } catch (error) {
      console.log("error update task", error);
      res.status(406).send(error);
    } finally {
      await prisma.$disconnect();
    }
  }
};
export default UpdateTaskDB;
