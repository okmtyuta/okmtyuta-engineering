import { Tag } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FetchArticlesByTagNamesDto {
  @IsNotEmpty()
  @IsString({each: true})
  tags: string[];
}
