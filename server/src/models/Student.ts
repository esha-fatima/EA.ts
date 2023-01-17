import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

interface Student {
  fullName: string;
  rollNumber: string;
  password: string;
  status?: STUDENT_STATUS;
}

export enum STUDENT_STATUS {
  ACTIVE = "ACTIVE",
  WITHDRAWN = "WITHDRAWN",
}

const Student = new Schema<Student>({
  fullName: { type: String },
  rollNumber: String,
  password: String,
  status: { type: STUDENT_STATUS, default: STUDENT_STATUS.ACTIVE },
});

const StudentModel = mongoose.model("Student", Student);

export default StudentModel;
