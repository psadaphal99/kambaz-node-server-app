import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.send(enrollments);
  });

  app.post("/api/enrollments/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const userId = req.session["currentUser"]?._id
    console.log("userId = ", userId)
    const e = await dao.createEnrollment(courseId, userId);
    const enrollments = await dao.findAllEnrollments();
    res.send(enrollments);
  });

  app.delete("/api/enrollments/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const userId = req.session["currentUser"]?._id
    console.log("userId = ", userId)
    const e = await dao.deleteEnrollment(courseId, userId);
    const enrollments = await dao.findAllEnrollments();
    res.send(enrollments);
  });
}