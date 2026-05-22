import express from "express";
import {
  deleteTodos,
  getAllTodos,
  addTodos,
  updateTodos
} from "../Controller/Get.Controller.js";

import { SignUpController } from "../Controller/SignUpController.js";
import { getAllUser, getSingleUser, Login } from "../Controller/LoginController.js";
import { tokenchecker } from "../Middleware/Token.js";
import Uploader from "../Middleware/multer.js";

const TodoRouter = express.Router();

TodoRouter.get("/todos", getAllTodos);

TodoRouter.post("/todos", addTodos);

TodoRouter.delete("/todos/:id",deleteTodos);

TodoRouter.put("/todos/:id",updateTodos);

TodoRouter.post(
  "/signup",
  Uploader.single("image"),
  SignUpController
);

TodoRouter.post("/login",Login);


TodoRouter.get("/users",getAllUser);
TodoRouter.get("/users/:id", getSingleUser);;

export default TodoRouter;