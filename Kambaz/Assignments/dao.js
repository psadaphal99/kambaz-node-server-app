import model from "./model.js";
// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

export async function findModulesForCourse(courseId) {
  console.log('course id = ', courseId)
  const assignments = await model.find({course:courseId});
  console.log("assignment = ", assignments)
  return assignments
}

export async function deleteAssignment(assignmentId) {
    await model.deleteOne({_id: assignmentId})
   }

export async function createAssignment(assignment) {
    const newAssignment = { ...assignment};
    return await model.create(newAssignment)
  }

export async function updateAssignment(assignmentId, assignmentUpdates) {

    return await model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  }
  