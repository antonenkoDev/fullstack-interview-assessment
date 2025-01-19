import { Task } from '../types/task';
import { Pool } from 'pg';

export class TaskService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }

    async getAllTasks(): Promise<Task[]> {
        const result = await this.pool.query('SELECT * FROM tasks');
        return result.rows;
    }

    async createTask(taskData: any): Promise<Task> {
        const { title, description, status } = taskData;
        const result = await this.pool.query(
            'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
            [title, description, status]
        );
        return result.rows[0];
    }

    async updateTask(id: number, taskData: any): Promise<Task> {
        const { title, description, status } = taskData;
        const result = await this.pool.query(
            'UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
            [title, description, status, id]
        );
        return result.rows[0];
    }

    async deleteTask(id: number): Promise<void> {
        await this.pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    }
}
