import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-filter.dto';

@Controller('tasks')
export class TasksController {
  // tasksService: TasksService;

  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService;
  }

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    const found = this.tasksService.getTaskById(id);

    if (!found) {
      throw new NotFoundException(`Task with Id ${id} not found`);
    }

    return found;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    // console.log('title', title);
    // console.log('description', description);
    return this.tasksService.createTask(createTaskDto);
  }

  // @Post()
  // createTask(@Body() body) {
  //   console.log(body);
  // }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
