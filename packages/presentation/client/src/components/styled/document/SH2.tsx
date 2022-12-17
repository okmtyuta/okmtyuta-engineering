import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled, { extendIStyled } from '../IStyled';

export interface SH2Props extends IStyled {
  maxWidth?: string;
}

export const SH2 = styled.h2<SH2Props>`
  ${extendIStyled()}
  ${fontSizing('h2')}
  max-width: ${props => props.maxWidth || "auto"}
`;
