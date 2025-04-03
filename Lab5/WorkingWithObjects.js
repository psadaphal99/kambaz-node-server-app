const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };

const module = {
    id: 1, name: "Nodejs Module",
    description: "Play with a NodeJS server with ExpressJS",
    course: "Web development"
}

  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });
    
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    app.get("/lab5/assignment/completed/:completed", (req, res) => {
        const {completed} = req.params;
        assignment.completed = completed;
        res.json(assignment);
    });

    app.get("/lab5/assignment/score/:score", (req, res) => {
        const {score} = req.params;
        assignment.score = score;
        res.json(assignment);
    });
    
    app.get("/lab5/module", (req, res) => {
        res.json(module);
      });
    
    app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
    });

    app.get("/lab5/module/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        module.name = newTitle;
        res.json(module);
    });

    app.get("/lab5/module/description", (req, res) => {
        const { description } = req.query;
        module.description = description;
        res.json(module);
    });
  };
  
  
  