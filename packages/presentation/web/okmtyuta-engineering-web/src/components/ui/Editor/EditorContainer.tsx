import styled from 'styled-components';
import colors from '../../../config/colors';
import { fontSizing } from '../../../config/fonts';
import IStyled from '../../styled/IStyled';

interface EditorContainerProps extends IStyled {
  minHeight?: string;
}

export const EditorContainer = styled.div<EditorContainerProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  color: ${(props) => props.color || 'inherit'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '0'};
  border: ${(props) => props.border || 'none'};
  outline: ${(props) => props.outline || 'none'};
  transition: ${(props) => props.transition || 'none'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0'};
  min-height: ${(props) => props.minHeight || 'initial'};
  position: relative;

  .editor-ltr {
  }
  .editor-rtl {
  }
  .editor-heading-h1 {
    ${fontSizing('h1')};
    line-height: 1.6;
  }
  .editor-heading-h2 {
    ${fontSizing('h2')}
    line-height: 1.6;
  }
  .editor-heading-h3 {
    ${fontSizing('h3')}
    line-height: 1.6;
  }
  .editor-heading-h4 {
    ${fontSizing('h4')}
    line-height: 1.6;
  }
  .editor-heading-h5 {
    ${fontSizing('h5')}
    line-height: 1.6;
  }
  .editor-heading-h6 {
    ${fontSizing('h6')}
    line-height: 1.6;
  }
  .editor-placeholder {
    ${fontSizing('body')}
    line-height: 1.6;
  }
  .editor-paragraph {
    ${fontSizing('body')}
    line-height: 1.6;
    margin: 8px 0;
  }
  .editor-quote {
    ${fontSizing('body')}
    line-height: 1.6;
    margin-left: 20px;
    margin-bottom: 10px;
    padding-left: 16px;
    color: ${colors.lightCharColor};
    border-left-color: ${colors.backgroundLightGray};
    border-left-width: 4px;
    border-left-style: solid;
  }
  .editor-nested-listitem {
    ${fontSizing('body')}
    line-height: 1.6;
  }
  .editor-list-ol {
    ${fontSizing('body')}
    line-height: 1.6;
  }
  .editor-list-ul {
    ${fontSizing('body')}
    line-height: 1.6;
  }
  .editor-listitem {
    ${fontSizing('body')}
    line-height: 1.6;
    margin-left: 1.4em;
  }
  editor-image {
  }
  .editor-link {
  }

  .editor-text-bold {
    font-weight: bold;
  }
  .editor-text-italic {
    font-style: italic;
  }
  .editor-text-underline {
    text-decoration: underline;
  }
  .editor-text-strikethrough {
  }
  .editor-text-underlineStrikethrough {
  }

  .editor-code {
    background-color: #f7fafb;
    font-family: Consolas, Monaco, monospace;
    display: block;
    line-height: 1.6;
    padding: 12px 40px;
    tab-size: 2;
    overflow-x: auto;
    position: relative;

    &::before {
      content: attr(data-gutter);
      position: absolute;
      top: 0;
      left: 16px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .editor-tokenAttr {
    color: #9d5b8b;
  }
  .editor-tokenProperty {
    color: #ea5506;
  }
  .editor-tokenSelector {
    color: #690;
  }
  .editor-tokenComment {
    color: #727171;
  }
  .editor-tokenFunction {
    color: #9d5b8b;
  }
  .editor-tokenOperator {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .editor-tokenVariable {
    color: #e90;
  }
  .editor-tokenPunctuation {
    color: #f8b500;
  }
`;
