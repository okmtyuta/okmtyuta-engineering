import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled, { extendIStyled } from '../IStyled';

export interface SH5Props extends IStyled {
  maxWidth?: string;
}

export const SH5 = styled.h5<SH5Props>`
  ${extendIStyled()}
  ${fontSizing('h5')}
  max-width: ${props => props.maxWidth || "auto"}
`;
