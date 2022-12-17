import { SH5, STime } from '../../styled/document';
import { SContainer } from '../../styled/container/SContainer';
import { SList } from '../../styled/list/SList';
import { SListItem } from '../../styled/list/SListItem';
import { ulid } from 'ulid';
import colors from '../../../config/colors';
import { SCharContainer } from '../../styled/container/SCharContainer';

interface ArticleCardProps {
  title?: string;
  tags: string[];
  author?: string;
  dateCreated?: string;
}

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <SContainer padding='12px' border={`1px solid ${colors.captionCharColor}`}>
      <STime fontSizeType="caption">{props.dateCreated}</STime>
      <SH5 color={colors.themeColor} margin="6px 0 4px 0">
        {props.title}
      </SH5>
      <SContainer fontSizeType='caption' margin="0 0 6px 0">
        by &nbsp;
        <SCharContainer>{props.author || 'anonymous'}</SCharContainer>
      </SContainer>
      <SList fontSizeType='caption' color={colors.captionCharColor} direction="row" gap="6px">
        {props.tags.map((tag) => {
          return <SListItem key={ulid()}>#{tag}</SListItem>;
        })}
      </SList>
    </SContainer>
  );
};
