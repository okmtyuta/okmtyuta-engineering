import styled from 'styled-components';
import IStyled from '../IStyled';

interface SFlexContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
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
  font-size: ${(props) => props.fontSize || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};
`;
