import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';
@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, description: string): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: title,
        description: description,
      },
    });
  }
}
