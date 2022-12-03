import styled from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../IStyled';

interface SH2Props extends IStyled {
  maxWidth?: string;
}

export const SH2 = styled.h2<SH2Props>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  ${fontSizing("h2")}
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-weight: ${(props) => props.fontWeight || '500'};
  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
  border: ${(props) => props.border || 'none'};
  outline: ${(props) => props.outline || 'none'};
  transition: ${(props) => props.transition || 'none'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};
`;
