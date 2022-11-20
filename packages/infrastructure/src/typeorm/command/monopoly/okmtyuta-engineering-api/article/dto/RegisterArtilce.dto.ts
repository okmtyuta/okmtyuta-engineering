import { IsNotEmpty, IsString, IsDate, IsOptional, IsArray, IsBoolean } from "class-validator"

export class RegisterArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

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
}