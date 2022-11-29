import { ReactNode } from 'react';
import styled from 'styled-components';
import IStyled from '../styled/IStyled';
import fonts from '../../config/fonts';
import colors from '../../config/colors';

interface BaseStyledProps extends IStyled {}

const BaseStyled = styled.div<BaseStyledProps>`
  color: ${colors.charColor};
  font-family: ${fonts.fontFamilies.sansSerifJa};
  h1 {
    font-size: ${fonts.fontSizes.h1.desktop}px;
  }

  h2 {
    font-size: ${fonts.fontSizes.h2.desktop}px;
  }

  h3 {
    font-size: ${fonts.fontSizes.h3.desktop}px;
  }

  h4 {
    font-size: ${fonts.fontSizes.h4.desktop}px;
  }

  h5 {
    font-size: ${fonts.fontSizes.h5.desktop}px;
  }

  h6 {
    font-size: ${fonts.fontSizes.h6.desktop}px;
  }

  div {
    font-size: ${fonts.fontSizes.body.desktop}px;
  }

  p {
    font-size: ${fonts.fontSizes.body.desktop}px;
  }

  ul {
  }

  ol {
  }

  li {
  }

  code {
  }

  pre {
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  u {
  }

  i {
  }
`;

interface BaseProps {
  children: ReactNode;
}

const Base = (props: BaseProps) => {
  return <BaseStyled>{props.children}</BaseStyled>;
};

export default Base;
