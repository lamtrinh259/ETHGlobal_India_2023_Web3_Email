import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class GenerateEmailIdDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  publickey: string;
}
