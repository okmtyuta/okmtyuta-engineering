import styled from 'styled-components';
import colors from '../../../config/colors';
import IStyled from '../IStyled';

export interface STextAreaProps extends IStyled {
  placeholder?: string;
  placeholderColor?: string;
  border?: string;
}

export const STextArea = styled.textarea<STextAreaProps>`
  display: block;
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
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.placeholderColor || colors.lightCharColor};
  }
`;
