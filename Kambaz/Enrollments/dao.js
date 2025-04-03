import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function findAllEnrollments() {
  return Database.enrollments;
}

export function createEnrollment(courseId, userId) {
    const newEnrollment = { user: userId, course: courseId, _id: uuidv4() };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;
}

export function deleteEnrollment(courseId, userId) {
    const { enrollments } = Database;
    const enr = enrollments.find((e)=> e.course===courseId && e.user===userId);
    console.log(enr)
    Database.enrollments = enrollments.filter((e) => enr._id!==e._id);
}
