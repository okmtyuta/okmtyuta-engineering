import { $getRoot, $getSelection } from 'lexical';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import styled from 'styled-components';
import { AutoFocusPlugin } from './plugins/AutoFocusPlugin';
import editorConfig from './config';
import { ToolbarPlugin } from './plugins/ToolbarPlugin';

const Placeholder = styled.div`
  color: #999;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 15px;
  left: 10px;
  font-size: 15px;
  user-select: none;
  display: inline-block;
  pointer-events: none;
`;

const ContentEditableStyled = styled(ContentEditable)`
  min-height: 150px;
  resize: none;
  font-size: 15px;
  caret-color: rgb(5, 5, 5);
  position: relative;
  tab-size: 1;
  outline: 0;
  padding: 15px 10px;
  caret-color: #444;
`;

const EditorContainer = styled.div`
  background: #fff;
  margin: 20px auto 20px auto;
  border-radius: 2px;
  max-width: 600px;
  color: #000;
  position: relative;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const theme = {};

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: { read: (arg0: () => void) => void }) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

  });
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

export const PlainEditor = () => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarPlugin />
      <EditorContainer>
        <RichTextPlugin
          contentEditable={<ContentEditableStyled />}
          placeholder={<Placeholder>Enter some plain text...</Placeholder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </EditorContainer>
    </LexicalComposer>
  );
};
