import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task as TaskModel } from '@prisma/client';
@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  async createTask(
    @Body() title: string,
    description: string,
  ): Promise<TaskModel> {
    return this.tasksService.createTask(title, description);
  }
}
