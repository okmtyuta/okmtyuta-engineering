import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { SingleFrame } from '../../styled/frame/SingleFrame';
import { SH2, SParagraph } from '../../styled/document';
import { ArticleTitle } from '../../ui/Article/ArticleTitle';
import { SContainer } from '../../styled/container/SContainer';
import { ArticleCard } from '../../ui/Article/ArticleCard';
import { useEffect, useState } from 'react';
import articleApi from './api/articleApi';
import { ulid } from 'ulid';

export const ArticleDetail = () => {
  const [article, setArticle] = useState<Article | null>(null);

  const getArticleById = async () => {
    const response = await articleApi.getArticleById("167");

    if (response.ok) {
      console.log(response.data);
      setArticle(response.data);
    } else {
    }
  };

  useEffect(() => {
    getArticleById();
    console.log(article)
  }, []);
  return (
    <SContainer margin="20px">
      <SingleFrame>
        <ArticleTitle
          tags={['Development', 'Organization']}
          title={article?.title}
          dateCreated="2022/12/01"
        />
        
        {article?.paragraphs.map((paragraph) => {
          return (
            <SParagraph margin='10px 0' key={ulid()}>
              {paragraph}
            </SParagraph>
          )
        })}

        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
        <ArticleCard
          tags={['Development', 'Organization']}
          title="メルペイVPoEによる2022年の振り返り"
          dateCreated="2022/12/01"
        />
      </SingleFrame>
    </SContainer>
  );
};
