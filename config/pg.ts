import { Pool } from "pg";
console.log(process.env.PGUSER);
console.log(process.env.PGHOST);
console.log(process.env.PGDATABASE);

const pool = new Pool({
  user: "marine",
  host: "localhost",
  database: "todolist",
  // password: "",
  port: 5432,
});

export default pool;
