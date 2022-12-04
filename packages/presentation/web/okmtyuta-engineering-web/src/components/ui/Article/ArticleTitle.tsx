import { SH1, STime } from '../../styled/document';
import { SContainer } from '../../styled/container/SContainer';
import { SList } from '../../styled/list/SList';
import { SListItem } from '../../styled/list/SListItem';
import { ulid } from 'ulid';
import colors from '../../../config/colors';
import { SCharContainer } from '../../styled/container/SCharContainer';

interface ArticleTitleProps {
  title?: string;
  tags: string[];
  author?: string;
  dateCreated?: string;
}

export const ArticleTitle = (props: ArticleTitleProps) => {
  return (
    <SContainer margin='0 0 48px 0'>
      <STime fontSizeType="subBody">{props.dateCreated}</STime>
      <SH1 color={colors.themeColor} margin="6px 0 4px 0">{props.title}</SH1>
      <SContainer margin='0 0 6px 0'>
        by &nbsp;
        <SCharContainer>
          {props.author || 'anonymous'}
        </SCharContainer>
      </SContainer>
      <SList color={colors.captionCharColor} direction="row" gap="6px">
        {props.tags.map((tag) => {
          return <SListItem key={ulid()}>#{tag}</SListItem>;
        })}
      </SList>
    </SContainer>
  );
};
