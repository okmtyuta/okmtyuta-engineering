import styled, { css } from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../IStyled';

interface SCharContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
}

export const SCharContainer = styled.span<SCharContainerProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};

  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  font-family: ${(props) => props.fontFamily || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};

  ${(props) => {
    return props.fontSizeType
      ? fontSizing(props.fontSizeType)
      : css`
          font-size: ${props.fontSize || 'inherit'};
        `;
  }}
`;
