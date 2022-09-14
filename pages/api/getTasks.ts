// import { CheckExistingUser } from "../../models/users.models";
// import { PrintMyTasks } from "../../models/tasks.models";
import { CheckExistingUser } from "@models/users.models";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import { select } from "redux-saga/effects";

const prisma = new PrismaClient();

const getMyTasksViaAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      console.log("je suis dans l'PI", req.body.payload);
      if (req.body.payload) {
        const IsUser = await CheckExistingUser(req.body.payload);

        if (IsUser) {
          const userId = IsUser.userid;

          const myTasks = await prisma.task.findMany({
            where: { OR: [{ creatorId: userId }, { ownerId: userId }] },
            include: {
              creator: { select: { email: true, username: true } },
              owner: { select: { email: true, username: true } },
            },

            orderBy: {
              item: "asc",
            },
          });

          // const myTasks = await PrintMyTasks(IsUser.userid);

          if (myTasks) {
            res.status(200).json(myTasks);
          } else {
            res.status(400).json({ message: "Pas de tâches trouvées en BDD" });
          }
        }
      }
    } catch (error) {
      console.log("error get tasks", error);
      res.status(400).send(error);
    }
  }
};
export default getMyTasksViaAPI;
