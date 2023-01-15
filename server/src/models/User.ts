import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export enum USER_STATUS {
  ACTIVE = "ACTIVE",
  WITHDRAWN = "WITHDRAWN",
}

const User = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  status: USER_STATUS,
});

const UserModel = mongoose.model("User", User);

export default UserModel;
