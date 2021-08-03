import express from "express";
import { createCourse } from "./routes";

const app = express();

/**Rota que chama a criação de curso */
app.get("/", createCourse);

app.listen(3333, () => {
  console.log("✔ Server started on port 3333");
});
