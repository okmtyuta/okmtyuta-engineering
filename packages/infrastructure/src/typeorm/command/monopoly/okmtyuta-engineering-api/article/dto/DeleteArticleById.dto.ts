import { IsNotEmpty, IsString } from "class-validator"

export class DeleteArticleByIdDto {
  @IsNotEmpty()
  @IsString()
  articleId: string;
}