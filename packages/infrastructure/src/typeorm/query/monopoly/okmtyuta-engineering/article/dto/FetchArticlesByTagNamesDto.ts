import { IsNotEmpty, IsString } from "class-validator";

export class FetchArticlesByTagNamesDto {
  @IsNotEmpty()
  @IsString({each: true})
  tags: string[];
}
