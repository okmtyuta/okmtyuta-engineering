import { useRef } from 'react';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import { SContainer } from '../../styled/container/SContainer';
import { SingleFrame } from '../../styled/frame';
import { AutoResizingTextField } from '../../ui/TextField/AutoResizingTextField';

export const RegisterArticle = () => {
  return (
    <SContainer minHeight="100vh" fontFamily={fonts.fontFamilies.sansSerifJa}>
      <SingleFrame>
        <AutoResizingTextField
          width="100%"
          border={`${colors.lightCharColor} 1px solid`}
          placeholder="記事概要"
          padding='6px'
        />
        <AutoResizingTextField
          width="100%"
          border={`${colors.lightCharColor} 1px solid`}
          placeholder="筆者"
          padding='6px'
        />
        <AutoResizingTextField
          width="100%"
          border={`${colors.lightCharColor} 1px solid`}
          placeholder="筆者"
          padding='6px'
        />
      </SingleFrame>
    </SContainer>
  );
};
