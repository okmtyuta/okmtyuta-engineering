import { IsNotEmpty, IsString } from "class-validator";

export class RegisterTagDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
