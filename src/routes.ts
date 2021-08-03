import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

/**Função de criação de curso */
export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Dani",
  });

  return response.json({ Message: "Bem vindo ao mundo Node.js" });
}
