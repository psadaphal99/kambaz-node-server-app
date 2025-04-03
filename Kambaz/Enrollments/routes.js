import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {

  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });

  app.post("/api/enrollments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const userId = req.session["currentUser"]?._id
    console.log("userId = ", userId)
    const e = dao.createEnrollment(courseId, userId);
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });

  app.delete("/api/enrollments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const userId = req.session["currentUser"]?._id
    console.log("userId = ", userId)
    const e = dao.deleteEnrollment(courseId, userId);
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  });
}