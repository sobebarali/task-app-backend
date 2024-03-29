"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const isAuthenticated_1 = require("../middleware/isAuthenticated");
const taskRouter = (0, express_1.Router)();
taskRouter.get("/task/list", isAuthenticated_1.isAuthenticated, task_1.getTodos);
taskRouter.post("/task/create", isAuthenticated_1.isAuthenticated, task_1.addTodo);
taskRouter.patch("/task/mark-as-done/:id", isAuthenticated_1.isAuthenticated, task_1.updateTodoDone);
taskRouter.patch("/task/mark-as-not-done/:id", isAuthenticated_1.isAuthenticated, task_1.updateTodoNotDone);
taskRouter.delete("/task/:id", isAuthenticated_1.isAuthenticated, task_1.deleteTodo);
taskRouter.get("/task/get/:id", isAuthenticated_1.isAuthenticated, task_1.getTodo);
exports.default = taskRouter;
