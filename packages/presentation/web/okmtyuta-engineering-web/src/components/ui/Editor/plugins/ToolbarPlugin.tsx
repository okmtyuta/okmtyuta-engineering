import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from 'lexical';
import { FC, useCallback, useState } from 'react';
import { HeadingTagType, $createHeadingNode } from '@lexical/rich-text';
import { $wrapNodes } from '@lexical/selection';
import { SButton } from '../../../styled/input/SButton';
import colors from '../../../../config/colors';

const SupportedBlockType = {
  p: 'p',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
} as const;
type BlockType = keyof typeof SupportedBlockType;

export const ToolbarPlugin: FC = () => {
  const [blockType, setBlockType] = useState<BlockType>('p');
  const [activeStyle, setActiveStyle] = useState({
    h1: false,
    p: true,
  });
  const [editor] = useLexicalComposerContext();

  const formatHeading = useCallback(
    (type: HeadingTagType) => {
      if (blockType !== type) {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            $wrapNodes(selection, () => $createHeadingNode(type));
          }
        });
        setActiveStyle({
          ...activeStyle,
          h1: !activeStyle.h1,
        });
        setBlockType(type);
      }
    },
    [blockType, editor]
  );

  const formatParagraph = useCallback(() => {
    if (blockType !== 'p') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
      setActiveStyle({
        ...activeStyle,
        p: !activeStyle.p,
      });
      setBlockType('p');
    }
  }, [blockType, editor]);

  return (
    <div>
      <div>
        <SButton
          isActive={activeStyle.h1}
          activeColor={colors.themeColor}
          onClick={() => {
            formatHeading('h1');
          }}
          transition="0.3s all"
        >
          H
        </SButton>

        <SButton
          isActive={activeStyle.p}
          activeColor={colors.themeColor}
          onClick={() => {
            formatParagraph();
            console.log('P');
          }}
          transition="0.3s all"
        >
          P
        </SButton>
      </div>
    </div>
  );
};
