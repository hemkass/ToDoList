import pool from "../../config/pg";
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
import { NextApiRequest, NextApiResponse } from "next";
import { CheckExistingUser } from "@models/users.models";

const uid2 = require("uid2");

const LogUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (req.body.email && req.body.password) {
      try {
        const isUser = await CheckExistingUser(req.body.email);

        if (isUser) {
          const UserSalt = isUser.salt;
          const UserHash = isUser.hash;
          // console.log("mon SALT ", isUser.rows[0].salt);
          // console.log("mon HASH", isUser.rows[0].hash);
          const newHash = SHA256(req.body.password + UserSalt).toString(
            encBase64
          );

          if (newHash === UserHash) {
            console.log("je suis connecté depuis le back", isUser);
            res.status(200).json({ status: "connected", user: isUser });
          } else {
            res.status(401).json({ message: "non authorisé" });
          }
        } else {
          res.status(401).json({ message: "non authorisé" });
        }
      } catch (error) {
        console.log("errorrrr", error);
        res.status(400).send(error);
      }
    }
  }
};
export default LogUser;
