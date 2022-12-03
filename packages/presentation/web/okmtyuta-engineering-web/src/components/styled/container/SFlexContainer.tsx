import styled, { css } from 'styled-components';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../IStyled';

interface SFlexContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
  gap?: string;
  align?: string;
  justify?: string;
}

export const SFlexContainer = styled.div<SFlexContainerProps>`
  display: flex;
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
  gap: ${(props) => props.gap || '0'};
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};

  ${(props) => {
    return props.fontSizeType
      ? fontSizing(props.fontSizeType)
      : css`
          font-size: ${props.fontSize || 'inherit'};
        `;
  }}
`;
