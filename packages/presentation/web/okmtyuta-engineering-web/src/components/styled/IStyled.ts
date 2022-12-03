import styled from 'styled-components';
import { fontSizeTypes } from '../../config/fonts';

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

// margin: ${(props) => props.margin || '0'};
// padding: ${(props) => props.padding || '0'};
// width: ${(props) => props.width || 'auto'};
// height: ${(props) => props.height || 'auto'};
// font-size: ${(props) => props.fontSize || "inherit"};
// font-family: ${(props) => props.fontFamily || 'inherit'};
// font-weight: ${(props) => props.fontWeight || 'inherit'};
// color: ${(props) => props.color || 'inherit'};
// background-color: ${(props) => props.backgroundColor || 'transparent'};
// border-radius: ${(props) => props.borderRadius || '0'};
// border: ${props => props.border || "none"};
// outline: ${props => props.outline || "none"};
// transition: ${props => props.transition || "none"};
// font-family: ${(props) => props.fontFamily || 'inherit'};
// font-size: ${(props) => props.fontSize || 'inherit'};
// border-radius: ${(props) => props.borderRadius || '0'};
