import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export enum STUDENT_STATUS {
  ACTIVE = "ACTIVE",
  WITHDRAWN = "WITHDRAWN",
}

const Student = new Schema({
  fullName: {type:String},
  rollNumber: String,
  password: String,
  status: {type:STUDENT_STATUS, default: STUDENT_STATUS.ACTIVE},
});

const StudentModel = mongoose.model("Student", Student);

export default StudentModel;
