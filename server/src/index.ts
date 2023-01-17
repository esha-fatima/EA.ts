import express, { Request, Response } from "express";
require("dotenv").config();
import { database } from "./db/db";

const PORT: number = 5000;
const app = express();

async function connectDb() {
  await database();
}

connectDb();

app.get("/", (req: Request, res: Response) => {
  res.send(`server running at port: ${PORT}`);
});

app.listen(PORT);
