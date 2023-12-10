import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class OnbordDto {
  @IsNotEmpty()
  ens: string;

  @IsNotEmpty()
  @IsEmail()
  gmail: string;
}
