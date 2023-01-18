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
  
});

const StudentModel = mongoose.model("student", Student);

export default StudentModel;
