import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ComponentProps } from 'react';
import nodes from '../nodes';
import { theme } from './theme';

export const plainEditorConfig: ComponentProps<typeof LexicalComposer>['initialConfig'] = {
  namespace: 'PlainEditor',
  onError: (error) => console.error(error),
  nodes: nodes,
  theme: theme,
};

export const readOnlyEditorConfig: ComponentProps<
  typeof LexicalComposer
>['initialConfig'] = {
  namespace: 'ReadOnlyEditor',
  onError: (error) => console.error(error),
  nodes: nodes,
  theme: theme,
  editable: false,
};
