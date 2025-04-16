import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
   _id: String,
   title: String,
   course: String,
   availableUntil: String,
   availableUntilTime: String,
   due: String,
   duetime: String,
   points: Number
 },
 { collection: "assignments" }
);
export default courseSchema;

