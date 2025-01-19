import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  title: string;

  description: string;

  status: string;

  priority: string;
}
