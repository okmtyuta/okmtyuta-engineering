import styled from 'styled-components';
import IStyled from '../IStyled';

export interface SInputProps extends IStyled {
  placeholder?: string;
  border?: string;
}

export const SInput = styled.input<SInputProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '0'};
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;
