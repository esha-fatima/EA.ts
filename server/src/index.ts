import express, { Request, Response } from "express";
import { database } from "./db/db";
require("dotenv").config()

const app = express();

// esh, fix this

database()


app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

app.listen(5000);
