import { RegisterArticleDto } from "@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto";
import {
  Article,
  Tag,
} from "@okmtyuta-engineering/library/lib/db/typeorm/entity";
import { ApiResult, get, post } from "../../../../utilities/api/api";
import { DeleteResult } from "typeorm";
import CONSTANTS from "@okmtyuta-engineering/library/lib/constants/constants";

const getAllArticles = async (): Promise<ApiResult<Article[]>> => {
  const response = await get(`${CONSTANTS.URL.API}/article/list`);
  return response.ok
    ? { ...response, data: response.data as Article[] }
    : response;
};

const deleteAllArticles = async (): Promise<ApiResult<DeleteResult>> => {
  const response = await get(`${CONSTANTS.URL.API}/article/deleteAll`);
  return response.ok
    ? { ...response, data: response.data as DeleteResult }
    : response;
};

const postArticle = async (
  params: RegisterArticleDto
): Promise<ApiResult<Article>> => {
  const article = {
    title: params.title,
    content: params.content,
    description: params.description,
    references: params.references,
    isPublic: params.isPublic,
    thumbnail: params.thumbnail,
  };
  const response = await post(`${CONSTANTS.URL.API}/article/register`, article);
  return response.ok
    ? { ...response, data: response.data as Article }
    : response;
};

const getAllTags = async (): Promise<ApiResult<Tag[]>> => {
  const response = await get(`${CONSTANTS.URL.API}/tag/list`);
  return response.ok ? { ...response, data: response.data as Tag[] } : response;
};

const articleApi = {
  getAllArticles,
  deleteAllArticles,
  postArticle,
  getAllTags,
};

export default articleApi;
