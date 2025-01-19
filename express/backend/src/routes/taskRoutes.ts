import express from 'express';
import { TaskService } from '../services/taskService';

const router = express.Router();
const taskService = new TaskService();

router.get('/tasks', async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
});

router.put('/tasks/:id', async (req, res) => {
    const task = await taskService.updateTask(parseInt(req.params.id), req.body);
    res.json(task);
});

router.delete('/tasks/:id', async (req, res) => {
    await taskService.deleteTask(parseInt(req.params.id));
    res.status(204).send();
});

export default router;
