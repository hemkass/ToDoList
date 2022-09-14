import pool from "../config/pg";
import {
  Task_TS,
  SET_TASK_PAYLOAD,
  ADD_TASK_PAYLOAD,
} from "@customTypes/DB.types";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const CheckExistingTask = async (taskid: number) => {
  try {
    const isTask = await prisma.task.findUnique({
      where: {
        taskid: taskid,
      },
    });
    if (isTask) {
      return isTask;
    }
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

// export const CreateTaskFct = (
//   item: string,
//   creator: number,
//   done: boolean,
//   description: string
// ): Promise<SET_TASK_PAYLOAD> => {
//   let sql = `INSERT INTO tasks (item,creator,owner,done,description) VALUES ($1,$2,$2,$3,$4)  RETURNING taskid , item,creator,owner`;

//   return new Promise((resolve, reject) => {
//     console.log("etape 2, la BDD ====> ", creator);
//     pool.query(sql, [item, creator, done, description], (error, result) => {
//       if (error) reject(error);
//       resolve(result.rows[0]);
//     });
//   });
// };

// export const UpdateTaskinDB = (
//   item: string,
//   description: string,
//   done: boolean,
//   deadline: string,
//   owner: number,
//   taskid: number
// ) => {
//   let sql = `UPDATE public.tasks SET item = $1, description = $2,done = $3,deadline = $4, owner=$5   WHERE taskid = $6 RETURNING owner,item, description, done, deadline, owner, taskid `;

//   return new Promise((resolve, reject) => {
//     console.log("etape 2, la BDD ====> ", deadline);
//     pool.query(
//       sql,
//       [item, description, done, deadline, owner, taskid],
//       (error, result) => {
//         if (error) reject(error);
//         resolve(result.rows[0]);
//       }
//     );
//   });
// };

// export const CheckExistingTask = (taskid: number): Promise<Task_TS> => {
//   let sql = ` SELECT * FROM public.tasks WHERE taskid=$1 `;

//   return new Promise((resolve, reject) => {
//     pool.query(sql, [taskid], (err, result) => {
//       if (err) reject(err);
//       resolve(result.rows[0]);
//     });
//   });
// };

// export const DeleteTaskDB = (taskid: number) => {
//   let sql = ` DELETE FROM public.tasks WHERE taskid=$1`;

//   return new Promise((resolve, reject) => {
//     pool.query(sql, [taskid], (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };

// export const PrintMyTasks = (userid: number): Promise<Task_TS[]> => {
//   console.log("je passe par ma BDD", userid);
//   let sql =
//     "SELECT taskid,item,description,deadline,done,owner,creator,email,username FROM public.tasks INNER JOIN users ON public.tasks.owner=public.users.userid WHERE owner=$1 OR creator=$1 ";

//   return new Promise((resolve, reject) => {
//     pool.query(sql, [userid], (err, result) => {
//       if (err) reject(err);
//       resolve(result.rows);
//     });
//   });
// };
