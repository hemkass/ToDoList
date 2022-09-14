// import { GetUsersDB } from "../../models/users.models";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const getMyUserViaAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      // const myUsers = await GetUsersDB();
      const myUsers = await prisma.user.findMany({
        orderBy: {
          username: "desc",
        },
      });

      if (myUsers) {
        res.status(200).json(myUsers);
      } else {
        res.status(401).json({ message: "Pas d'utilisateurs trouvés en BDD" });
      }
    } catch (error) {
      console.log("error get user", error);
      res.status(400).send(error);
    } finally {
      await prisma.$disconnect();
    }
  }
};
export default getMyUserViaAPI;
