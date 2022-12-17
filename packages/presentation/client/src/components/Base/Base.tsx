import { ReactNode } from 'react';
import styled from 'styled-components';
import IStyled from '../styled/IStyled';
import fonts from '../../config/fonts';
import colors from '../../config/colors';
import { SFlexContainer } from '../styled/container/SFlexContainer';

interface BaseStyledProps extends IStyled {}

const BaseStyled = styled.div<BaseStyledProps>`
  color: ${colors.charColor};
  font-family: ${fonts.fontFamilies.sansSerifJa};
`;

interface BaseProps {
  children: ReactNode;
}

export const Base = (props: BaseProps) => {
  return (
    <BaseStyled>
      <SFlexContainer margin='20px' fontSizeType='h1' color={colors.themeColor} fontFamily={fonts.fontFamilies.anton} justify="center">okmtyuta Engineering</SFlexContainer>
      {props.children}
    </BaseStyled>
  );
};

export default Base;
