// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
// }

export async function findAllEnrollments() {
  const enrollments = await model.find().populate("course");
  // console.log("enrollemnts", enrollments)
  return enrollments.map((enrollment) => {
    // console.log("e = ", enrollment)
    enrollment.course = enrollment.course._id
    return enrollment
  });
}

export async function createEnrollment(courseId, userId) {
  const newEnrollment = { user:userId, course:courseId, _id: `${userId}-${courseId}` };
  return await model.create(newEnrollment);
 }
 export async function deleteEnrollment(courseId, userId) {
  return await model.deleteOne({ user:userId, course:courseId });
 }
 
// export function createEnrollment(courseId, userId) {
//     const newEnrollment = { user: userId, course: courseId, _id: uuidv4() };
//     Database.enrollments = [...Database.enrollments, newEnrollment];
//     return newEnrollment;
// }

// export function deleteEnrollment(courseId, userId) {
//     const { enrollments } = Database;
//     const enr = enrollments.find((e)=> e.course===courseId && e.user===userId);
//     console.log(enr)
//     Database.enrollments = enrollments.filter((e) => enr._id!==e._id);
// }



export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
//  console.log("enrollments = ", enrollments)
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user:user, course:course, _id: `${user}-${course}` });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}

