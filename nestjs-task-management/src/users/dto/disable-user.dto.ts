import { IsNotEmpty } from 'class-validator';

export class DisableUserDto {
  @IsNotEmpty()
  status: string;
}
