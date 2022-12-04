import styled from 'styled-components';
import IStyled, { extendIStyled } from '../IStyled';

export interface SCharContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
}

export const SCharContainer = styled.span<SCharContainerProps>`
  ${extendIStyled()}

  min-height: ${(props) => props.minHeight || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};
`;
