import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  attachments?: unknown[];
}
