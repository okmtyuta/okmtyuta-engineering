import colors from '../../../config/colors';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import styled from 'styled-components';
import { AutoFocusPlugin } from './plugins/AutoFocusPlugin';
import { ToolbarPlugin } from './plugins/ToolbarPlugin';
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';
import { EditorContainer } from './EditorContainer';
import { plainEditorConfig } from './config';

const Placeholder = styled.div`
  color: ${colors.lightCharColor};
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  font-size: 15px;
  user-select: none;
  display: inline-block;
  pointer-events: none;
  top: 20px;
  left: 12px;
`;

const ContentEditableStyled = styled(ContentEditable)`
  position: relative;
  tab-size: 1;
  outline: 0;
  caret-color: ${colors.lightCharColor};
  min-height: 420px;
`;

function onChange(editorState: { read: (arg0: () => void) => void }) {
  editorState.read(() => {});
}

export const PlainEditor = () => {
  return (
    <LexicalComposer initialConfig={plainEditorConfig}>
      <ToolbarPlugin />
      <EditorContainer
        backgroundColor={colors.white}
        minHeight="420px"
        padding="12px"
      >
        <RichTextPlugin
          contentEditable={<ContentEditableStyled />}
          placeholder={<Placeholder>Enter some plain text...</Placeholder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <ListPlugin />
        <CheckListPlugin />
        <CodeHighlightPlugin />
        <AutoFocusPlugin />
      </EditorContainer>
    </LexicalComposer>
  );
};
