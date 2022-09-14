import pool from "../config/pg";
import { USER_TS, USER_DB_TS } from "@customTypes/DB.types";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const CheckExistingUser = async (email: string) => {
  try {
    const isUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (isUser) {
      return isUser;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

// export const CheckExistingUser = (email: string): Promise<USER_DB_TS> => {
//   let sql = ` SELECT * FROM public.users WHERE email=$1 `;

//   return new Promise((resolve, reject) => {
//     pool.query(sql, [email], (err, result) => {
//       if (err) reject(err);
//       resolve(result.rows[0]);
//     });
//   });
// };

// export const CreateUserFct = (
//   name: string,
//   username: string,
//   email: string,
//   salt: string,
//   hash: string
// ): Promise<USER_DB_TS> => {
//   let sql = `INSERT INTO users (name,username,email,salt,hash) VALUES ($1, $2, $3,$4,$5) RETURNING userid , name , username, email `;

//   return new Promise((resolve, reject) => {
//     pool.query(sql, [name, username, email, salt, hash], (err, result) => {
//       if (err) reject(err);
//       resolve(result.rows[0]);
//     });
//   });
// };

// export const GetUsersDB = (): Promise<USER_DB_TS[]> => {
//   let sql = ` SELECT name,username,email,userid FROM public.users`;

//   return new Promise((resolve, reject) => {
//     pool.query(sql, (err, result) => {
//       if (err) reject(err);
//       resolve(result.rows);
//     });
//   });
// };
