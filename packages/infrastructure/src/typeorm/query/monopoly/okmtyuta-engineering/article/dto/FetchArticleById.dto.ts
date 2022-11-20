import { IsNotEmpty, IsString } from "class-validator"

export class FetchArticleByIdDto {
  @IsNotEmpty()
  @IsString()
  articleId: string;
}