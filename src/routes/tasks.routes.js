import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import {getTask, getTasks, createTasks, updateTask, deleteTask} from "../controllers/tasks.controllers.js"
import {validateSchema} from "../middlewares/validator.middleware.js"
import { createTaskSchema } from "../schemas auth/task.schema.js"

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTasks)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)

export default router;