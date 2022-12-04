import styled, { css } from 'styled-components';
import { fontSizeTypes, fontSizing } from '../../config/fonts';

interface IStyled {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontSizeType?: fontSizeTypes;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  outline?: string;
  transition?: string;
}

export default IStyled;

export const extendIStyled = () => {
  return css<IStyled>`
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

    ${(props) => {
      return props.fontSizeType
        ? fontSizing(props.fontSizeType)
        : css`
            font-size: 'inherit';
          `;
    }}
  `;
};

// margin={props.margin}
// padding={props.padding}
// width={props.width}
// height={props.height}
// fontSize={props.fontSize}
// fontFamily={props.fontFamily}
// fontWeight={props.fontWeight}
// color={props.color}
// backgroundColor={props.backgroundColor}
// borderRadius={props.borderRadius}
// border={props.border}
// outline={props.border}
// transition={props.transition}
