import { CreateArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/CreateArticle.dto';
import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { ApiResult, get, post } from '../../../../utilities/api/api';
import { DeleteResult } from 'typeorm';
import CONSTANTS from '@okmtyuta-engineering/library/lib/constants/constants';

const getAllArticles = async (): Promise<ApiResult<Article[]>> => {
  const response = await get(CONSTANTS.URL.API.ARTICLE.GET_ALL);
  return response.ok
    ? { ...response, data: response.data as Article[] }
    : response;
};

const getArticleById = async (
  articleId: string
): Promise<ApiResult<Article>> => {
  const response = await get(`${CONSTANTS.URL.API.ARTICLE.DETAIL}/${articleId}`);
  return response.ok
    ? { ...response, data: response.data as Article }
    : response;
};

const deleteAllArticles = async (): Promise<ApiResult<DeleteResult>> => {
  const response = await get(CONSTANTS.URL.API.ARTICLE.DELETE_ALL);
  return response.ok
    ? { ...response, data: response.data as DeleteResult }
    : response;
};

const postArticle = async (
  params: CreateArticleDto
): Promise<ApiResult<Article>> => {
  const article = {
    title: params.title,
    paragraphs: params.paragraphs,
    description: params.description,
    references: params.references,
    isPublic: params.isPublic,
    thumbnail: params.thumbnail,
  };
  const response = await post(CONSTANTS.URL.API.ARTICLE.CREATE, article);
  return response.ok
    ? { ...response, data: response.data as Article }
    : response;
};

// const getAllTags = async (): Promise<ApiResult<Tag[]>> => {
//   const response = await get(`${CONSTANTS.URL.API}/tag/list`);
//   return response.ok ? { ...response, data: response.data as Tag[] } : response;
// };

const articleApi = {
  getAllArticles,
  deleteAllArticles,
  postArticle,
  getArticleById,
};

export default articleApi;
