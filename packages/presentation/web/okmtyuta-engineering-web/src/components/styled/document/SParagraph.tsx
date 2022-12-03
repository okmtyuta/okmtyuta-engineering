import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../IStyled';

interface SParagraphProps extends IStyled {
  maxWidth?: string;
  textAlign?: "center" | "right" | "left" | "justify"
}

export const SParagraph = styled.p<SParagraphProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0 0 12px 0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  ${fontSizing('body')}
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-weight: ${(props) => props.fontWeight || 'inherit'};
  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
  border: ${(props) => props.border || 'none'};
  outline: ${(props) => props.outline || 'none'};
  transition: ${(props) => props.transition || 'none'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};
  text-align: ${props => props.textAlign || "left"};
  line-height: 1.8;
`;
