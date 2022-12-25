import { Article } from '@okmtyuta-engineering/library/lib/db/typeorm/entity';
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import { SFlexContainer } from '../../styled/container';
import { SContainer } from '../../styled/container/SContainer';
import { SH3 } from '../../styled/document';
import { SingleFrame } from '../../styled/frame';
import { SButton } from '../../styled/input';
import { SList, SListItem } from '../../styled/list';
import { AutoResizingTextField } from '../../ui/TextField/AutoResizingTextField';
import articleApi from './api/articleApi';

export const RegisterArticle = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [articles, setArticles] = useState<Article[]>([]);

  const getAllArticles = async () => {
    const response = await articleApi.getAllArticles();

    if (response.ok) {
      console.log(response.data);
      setArticles(response.data);
    } else {
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <SContainer minHeight="100vh" fontFamily={fonts.fontFamilies.sansSerifJa}>
      <SingleFrame>
        <SFlexContainer direction="column" gap="10px">
          <SH3>Title</SH3>
          <AutoResizingTextField
            width="100%"
            border={`${colors.lightCharColor} 1px solid`}
            placeholder="Title"
            padding="6px"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <SH3>Description</SH3>
          <AutoResizingTextField
            width="100%"
            border={`${colors.lightCharColor} 1px solid`}
            placeholder="Description"
            padding="6px"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <SH3>Content</SH3>
          <AutoResizingTextField
            width="100%"
            border={`${colors.lightCharColor} 1px solid`}
            placeholder="Content"
            padding="6px"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </SFlexContainer>

        <SFlexContainer justify="center">
          <SButton
            backgroundColor={colors.themeColor}
            color={colors.white}
            padding="8px 24px"
            borderRadius="4px"
            margin="26px"
            onClick={async () => {
              const params = {
                title: title,
                paragraphs: content.split('\n').filter((con) => con !== ''),
                description: description,
                references: [],
                isPublic: true,
                thumbnail: null,
                user: null,
                tags: [],
              };
              const response = await articleApi.postArticle(params);
              if (response.ok) {
                getAllArticles();
              }
            }}
          >
            Post
          </SButton>
        </SFlexContainer>

        <SList>
          {articles.map((article) => {
            return <SListItem key={ulid()}>{article.title}</SListItem>;
          })}
        </SList>
      </SingleFrame>
    </SContainer>
  );
};
