import styled, { css } from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../IStyled';

export interface SListProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
  direction?: string;
  gap?: string;
}

export const SList = styled.ol<SListProps>`
  display: flex;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
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

  ${(props) => {
    return props.fontSizeType
      ? fontSizing(props.fontSizeType)
      : css`
          font-size: ${props.fontSize || 'inherit'};
        `;
  }}

  flex-direction: ${(props) => props.direction || 'column'};
  gap: ${(props) => props.gap || '0'};
`;
