import { IsNotEmpty, IsString } from "class-validator"

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}