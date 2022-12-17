import styled from 'styled-components';
import IStyled, { extendIStyled } from '../IStyled';

export interface SContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
}

export const SContainer = styled.div<SContainerProps>`
  ${extendIStyled()}
  
  min-height: ${(props) => props.minHeight || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};
`;
