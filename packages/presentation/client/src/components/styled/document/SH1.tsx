import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled, { extendIStyled } from '../IStyled';

export interface SH1Props extends IStyled {
  maxWidth?: string;
}

export const SH1 = styled.h1<SH1Props>`
  ${extendIStyled()}
  ${fontSizing('h1')}
  max-width: ${props => props.maxWidth || "auto"}
`;
