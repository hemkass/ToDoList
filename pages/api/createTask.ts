import pool from "../../config/pg";
// import { CreateTaskFct } from "../../models/tasks.models";
// import { CheckExistingUser } from "../../models/users.models";
import { CheckExistingUser } from "@models/users.models";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const SetNewTask = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      console.log("ce que je reçois create task", req.body.payload);
      const { item, creatorEmail } = req.body.payload;
      const IsCreator = await CheckExistingUser(creatorEmail);

      if (IsCreator) {
        const creator = IsCreator.userid;
        const done = false;
        const description = "";
        // const IsTaskCreated = await CreateTaskFct(
        //   item,
        //   creator,
        //   done,
        //   description
        // );

        // const taskCreated = IsTaskCreated;
        const IsTaskCreated = await prisma.task.create({
          data: {
            item: item,
            creator: { connect: { userid: creator } },
            done: done,
            description: description,
            deadline: "",
            picture: "",
            owner: { connect: { userid: creator } },

            // ownerId:creator,
          },
        });

        if (IsTaskCreated && IsCreator) {
          console.log("mon createur est ajouté creator");
          res.status(200).json(IsTaskCreated);
        } else {
          res.status(400).json({ message: "error, tache non créée" });
        }
      }
    } catch (error) {
      console.log("error create task", error);
      res.status(400).send(error);
    } finally {
      await prisma.$disconnect();
    }
  }
};
export default SetNewTask;
