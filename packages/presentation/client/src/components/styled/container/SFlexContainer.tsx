import styled from 'styled-components';
import IStyled, { extendIStyled } from '../IStyled';

export interface SFlexContainerProps extends IStyled {
  minHeight?: string;
  maxHeight?: string;
  gap?: string;
  align?: string;
  justify?: string;
  direction?: 'row' | 'column';
}

export const SFlexContainer = styled.div<SFlexContainerProps>`
  ${extendIStyled()}

  display: flex;
  min-height: ${(props) => props.minHeight || 'auto'};
  max-height: ${(props) => props.maxHeight || 'initial'};
  gap: ${(props) => props.gap || '0'};
  align-items: ${(props) => props.align || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
`;
