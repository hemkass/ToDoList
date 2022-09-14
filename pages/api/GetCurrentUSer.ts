// import { CheckExistingUser } from "../../models/users.models";
import { CheckExistingUser } from "@models/users.models";
import { NextApiRequest, NextApiResponse } from "next";

const getMyUserViaAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const myCurrentUser = await CheckExistingUser(req.body.payload);

      if (myCurrentUser) {
        return res.status(200).json({
          name: myCurrentUser.name,
          username: myCurrentUser.username,
          userid: myCurrentUser.userid,
          email: myCurrentUser.email,
        });
      } else {
        return res
          .status(401)
          .json({ message: "Pas d'utilisateurs trouvés en BDD" });
      }
    } catch (error) {
      console.log("error get user", error);
      res.status(400).send(error);
    }
  }
};
export default getMyUserViaAPI;
