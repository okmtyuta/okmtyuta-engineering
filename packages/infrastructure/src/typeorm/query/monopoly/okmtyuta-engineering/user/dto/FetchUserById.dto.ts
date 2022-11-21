import { IsNotEmpty, IsString } from "class-validator";

export class FetchUserByIdDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
