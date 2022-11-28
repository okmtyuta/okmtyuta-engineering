import { useEffect, useState } from 'react';
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArticle.dto';
import {
  Article,
  Tag,
} from '@okmtyuta-engineering/library/lib/db/typeorm/entity';

import colors from '../../../config/colors';

import articleApi from './api/articleApi';
import fonts from '../../../config/fonts';
import { AutoResizingTextField } from '../../ui/TextField/AutoResizingTextField';
import { SContainer } from '../../styled/container/SContainer';
import stylingConstants from '../../../config/stylingConstants';
import { SInput } from '../../styled/input/SInput';

export const RegisterArticle = () => {
  const [article, setArticle] = useState<RegisterArticleDto>({
    title: 'タイトル',
    content: '今日は快晴なり',
    description: '今日の天気を述べてみた',
    references: [],
    isPublic: true,
    thumbnail: null,
    tags: [],
    user: null,
  });

  const [articles, setArticles] = useState<Article[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagNames, setTagNames] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const result = await articleApi.getAllArticles();
      if (result.ok) {
        setArticles(result.data);
      }
    })();
    (async () => {
      const result = await articleApi.getAllTags();
      if (result.ok) {
        setTags(result.data);
        setTagNames(result.data.map((datum) => datum.name));
      }
      console.log(tagNames);
    })();
  }, []);

  return (
    <SContainer
      minHeight="100vh"
      backgroundColor={colors.backgroundLightGray}
      fontFamily={fonts.fontFamilies.sansSerifJa}
    >
      <SContainer padding={`${stylingConstants.padding * 4}px`}>
        <SContainer>タイトル</SContainer>
        <SInput
          color={colors.charColor}
          padding={`${stylingConstants.padding}px`}
          placeholder="タイトル"
          width="100%"
          fontSize={`${fonts.fontSizes.body.desktop}px`}
          backgroundColor={colors.white}
          fontFamily={fonts.fontFamilies.sansSerifJa}
          borderRadius={`${stylingConstants.borderRadius}px`}
        />
        <SContainer>本文</SContainer>
        <AutoResizingTextField
          color={colors.charColor}
          padding={`${stylingConstants.padding}px`}
          placeholder="本文"
          width="100%"
          height="500px"
          fontSize={`${fonts.fontSizes.body.desktop}px`}
          backgroundColor={colors.white}
          borderRadius={`${stylingConstants.borderRadius}px`}
          fontFamily={fonts.fontFamilies.sansSerifJa}
        />
      </SContainer>
    </SContainer>
  );
};
