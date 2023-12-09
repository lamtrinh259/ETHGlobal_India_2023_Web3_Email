import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class GenerateEmailIdDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
