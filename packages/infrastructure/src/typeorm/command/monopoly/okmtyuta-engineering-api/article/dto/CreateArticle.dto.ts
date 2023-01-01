import { Tag } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag";
import { User } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/User";
import { IsNotEmpty, IsString, IsOptional, IsArray, IsBoolean } from "class-validator"

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString({each: true})
  paragraphs: string[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  references: string[] | null;

  @IsNotEmpty()
  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsString()
  thumbnail: string | null;

  @IsOptional()
  tags: Tag[];

  @IsNotEmpty()
  user: User | null;
}