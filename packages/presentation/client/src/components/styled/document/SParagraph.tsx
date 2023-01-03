import styled from 'styled-components';
import IStyled, { extendIStyled } from '../IStyled';

export interface SParagraphProps extends IStyled {
  maxWidth?: string;
  textAlign?: 'center' | 'right' | 'left' | 'justify';
  lineHeight?: string;
}

export const SParagraph = styled.p<SParagraphProps>`
  border-radius: ${(props) => props.borderRadius || '0'};
  text-align: ${(props) => props.textAlign || 'left'};
  line-height: ${(props) => props.lineHeight || '1.8'};
  margin: ${(props) => props.margin || '0px'};
`;
