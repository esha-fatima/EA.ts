import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export interface GradedComponents {
  rollNumber: string,
  classParticipation?: number,
  assignmentOne?: number,
  assignmentTwo?: number,
  assignmentThree?: number,
  examOne?: number,
  examTwo?: number,
  examThree?: number,
  examFour?: number,
  //todo
}

const GradedComponents = new Schema({
  rollNumber: String,
  classParticipation: { type: mongoose.Types.Decimal128, default: 0.0 },
  assignmentOne: { type: mongoose.Types.Decimal128, default: 0.0 },
  assignmentTwo: { type: mongoose.Types.Decimal128, default: 0.0 },
  assignmentThree: { type: mongoose.Types.Decimal128, default: 0.0 },
  examOne: { type: mongoose.Types.Decimal128, default: 0.0 },
  examTwo: { type: mongoose.Types.Decimal128, default: 0.0 },
  examThree: { type: mongoose.Types.Decimal128, default: 0.0 },
  examFour: { type: mongoose.Types.Decimal128, default: 0.0 },
  totalPercentage: {
    type: mongoose.Types.Decimal128,
    default: function () {
      return this.assignmentOne + this.assignmentTwo + this.assignmentThree;
    },
  },
});

const GradedComponentsModel = mongoose.model(
  "GradedComponents",
  GradedComponents
);

export default GradedComponentsModel;
