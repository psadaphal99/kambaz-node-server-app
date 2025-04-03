import * as assignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app) {
 app.get("/api/assignments/:courseId/assignment", async (req, res) => {
   const { courseId } = req.params;
   const status = await assignmentsDao.findModulesForCourse(courseId);
   res.json(status);
})

app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentsDao.deleteAssignment(assignmentId);
   res.send(status);
});

app.post("/api/assignments/:courseId/assignment", async (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });

app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}
