import { CheckExistingTask } from "@models/tasks.models";
// import { DeleteTaskDB } from "../../models/tasks.models";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const DeleteMyTaskAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // const { task } = req.body.payload;

      const IsTask = await CheckExistingTask(req.body.payload.taskid);

      if (IsTask) {
        const taskToDelete = IsTask?.taskid;
        console.log("tache trouvée", IsTask?.taskid);
        const deleteUser = await prisma.task.delete({
          where: {
            taskid: taskToDelete,
          },
        });
        // DeleteTaskDB(taskToDelete);
        res.status(200).json({ message: "tache effacée" });
      } else {
        res.status(400).json({ message: "error, tache non effacée" });
      }
    } catch (error) {
      console.log("error set task", error);
      res.status(400).send(error);
    } finally {
      await prisma.$disconnect();
    }
  }
};
export default DeleteMyTaskAPI;
