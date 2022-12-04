import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled, { extendIStyled } from '../IStyled';

export interface SH3Props extends IStyled {
  maxWidth?: string;
}

export const SH3 = styled.h3<SH3Props>`
  ${extendIStyled()}
  ${fontSizing('h3')}
  max-width: ${props => props.maxWidth || "auto"}
`;
