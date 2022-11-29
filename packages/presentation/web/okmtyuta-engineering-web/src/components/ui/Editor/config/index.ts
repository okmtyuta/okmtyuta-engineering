import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ComponentProps } from 'react';
import nodes from '../nodes';

const editorConfig: ComponentProps<typeof LexicalComposer>['initialConfig'] = {
  namespace: 'PlainEditor',
  onError: (error: any) => console.error(error),
  nodes: nodes,
};

export default editorConfig;
