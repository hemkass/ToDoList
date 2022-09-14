import pool from "../../config/pg";
// import { CreateUserFct } from "../../models/users.models";
import { CheckExistingUser } from "@models/users.models";
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const axios = require("axios");
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from "next";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, username, email, password } = req.body.user;

    if (email && password) {
      console.log("hello");
      const isUser = await CheckExistingUser(email);
      console.log("est ce que mon utilisateur existe", isUser?.email);

      if (!isUser?.email) {
        const salt = uid2(16);
        const hash = SHA256(password + salt).toString(encBase64);

        try {
          // const isCreated = await CreateUserFct(
          //   name,
          //   username,
          //   email,
          //   salt,
          //   hash
          // );

          const isCreated = await prisma.user.create({
            data: {
              name: name,
              username: username,
              email: email,
              salt: salt,
              hash: hash,
            },
          });
          if (isCreated) {
            console.log("nouvel utilisateur", {
              name: isCreated.name,
              username: isCreated.username,
              email: isCreated.email,
            });

            res.status(200).json(isCreated);
          } else {
            res.status(400).json({ message: "error, utilisateur non créé" });
          }
        } catch (err) {
          console.log("errorrrr", err);
          res.status(400).send(err);
        } finally {
          await prisma.$disconnect();
        }
      } else {
        res.status(403).json({ message: "Unauthorized" });
      }
    } else {
      res.status(428).json({ message: "email and password field required" });
    }
  }
};
export default createUser;

// app.post(
//   "/api/createUser",
//   checkDestDir,
//   multer({ dest: res.directory }).single("file"),
//   (req, res) => {
//     res.redirect("/");
//   }
// );
