import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  // Missing error handling
  async createTask(createTaskDto: any) {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  // Incorrect implementation - no pagination
  async findAll() {
    return await this.taskRepository.find();
  }

  // Missing validation
  async updateTask(id: number, updateTaskDto: any) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  // No error handling for non-existent tasks
  async deleteTask(id: number) {
    return await this.taskRepository.delete(id);
  }
}
