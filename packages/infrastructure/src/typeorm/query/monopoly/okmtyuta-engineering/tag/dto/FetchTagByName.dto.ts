import { IsNotEmpty, IsString } from "class-validator";

export class FetchTagByNameDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
