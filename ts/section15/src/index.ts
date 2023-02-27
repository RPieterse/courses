import express from "express";
import todoRoutes from "./routes/todo";
import { json } from "body-parser";

const app = express();
app.use(json());

app.use("/todos", todoRoutes);

// middleware
app.use(
  (
    err: Error,
    _: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(err);
    if (!err) {
      next();
    } else {
      res.status(500).json({ message: err.message });
    }
  }
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
