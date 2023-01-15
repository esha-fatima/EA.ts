import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

// esh, fix this
const database = await mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

app.listen(5000);
