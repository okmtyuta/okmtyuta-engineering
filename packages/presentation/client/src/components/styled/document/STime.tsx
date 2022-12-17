import styled from 'styled-components';
import IStyled, { extendIStyled } from '../IStyled';

export interface STimeProps extends IStyled {}

export const STime = styled.time<STimeProps>`
  ${extendIStyled()}
`;
