import { IsNotEmpty, IsNumber } from "class-validator";

export class FetchArticlesDto {
  @IsNotEmpty()
  @IsNumber()
  take?: number;
}
