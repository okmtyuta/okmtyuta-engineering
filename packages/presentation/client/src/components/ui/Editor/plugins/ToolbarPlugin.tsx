import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from 'lexical';
import { FC, useCallback, useEffect, useState } from 'react';
import {
  HeadingTagType,
  $createHeadingNode,
  $isHeadingNode,
  $createQuoteNode,
} from '@lexical/rich-text';
import {
  INSERT_CHECK_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { CODE_LANGUAGE_FRIENDLY_NAME_MAP, $isCodeNode } from '@lexical/code';
import { $createCodeNode } from '@lexical/code';
import { $getNearestNodeOfType } from '@lexical/utils';
import { $wrapNodes } from '@lexical/selection';
import { SButton } from '../../../styled/input/SButton';
import colors from '../../../../config/colors';
import { SFlexContainer } from '../../../styled/container/SFlexContainer';

import { CODE_LANGUAGE_COMMAND } from './CodeHighlightPlugin';

// icons
// import { TbH1 } from 'react-icons/tb';
// import { BsParagraph, BsCode } from 'react-icons/bs';
// import {
//   MdFormatQuote,
//   MdFormatListBulleted,
//   MdFormatListNumbered,
//   MdChecklist,
// } from 'react-icons/md';
import { SSelect } from '../../../styled/input/SSelect';
import { SOption } from '../../../styled/input/SOption';

const TOOLBAR_ICON_SIZE = 24;

const CodeLanguagesOptions = Object.entries(
  CODE_LANGUAGE_FRIENDLY_NAME_MAP
).map(([value, label]) => ({ value, label }));

const SupportedBlockType = {
  paragraph: 'paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  number: 'Numbered List',
  bullet: 'Bulleted List',
  check: 'Check List',
  quote: 'Quote',
  code: 'Code Block',
} as const;
type BlockType = keyof typeof SupportedBlockType;

export const ToolbarPlugin: FC = () => {
  const [blockType, setBlockType] = useState<BlockType>('paragraph');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;

        const anchorNode = selection.anchor.getNode();
        const targetNode =
          anchorNode.getKey() === 'root'
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();

        if ($isHeadingNode(targetNode)) {
          const tag = targetNode.getTag();
          setBlockType(tag);
        } else if ($isListNode(targetNode)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const listType = parentList
            ? parentList.getListType()
            : targetNode.getListType();

          setBlockType(listType);
        } else {
          const nodeType = targetNode.getType();
          if ($isCodeNode(targetNode)) {
            setCodeLanguage(targetNode.getLanguage() || '');
          }
          if (nodeType in SupportedBlockType) {
            setBlockType(nodeType as BlockType);
          } else {
            setBlockType('paragraph');
          }
        }
      });
    });
  }, [editor]);

  const formatHeading = useCallback(
    (type: HeadingTagType) => {
      if (blockType !== type) {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            $wrapNodes(selection, () => $createHeadingNode(type));
          }
        });
      }
      const editorState = editor.getEditorState();
      const json = editorState.toJSON();
      console.log(json);
    },
    [blockType, editor]
  );

  const formatParagraph = useCallback(() => {
    if (blockType !== 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
  }, [blockType, editor]);

  const formatQuote = useCallback(() => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      });
    }
  }, [blockType, editor]);

  const formatBulletList = useCallback(() => {
    if (blockType !== 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatNumberedList = useCallback(() => {
    if (blockType !== 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatCheckList = useCallback(() => {
    if (blockType !== 'check') {
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
    }
  }, [blockType, editor]);

  const formatCode = useCallback(() => {
    if (blockType !== 'code') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createCodeNode());
        }
      });
    }
  }, [blockType, editor]);

  return (
    <div>
      <SFlexContainer padding="12px" gap="12px">
        <SButton
          isActive={blockType === 'paragraph'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatParagraph();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <BsParagraph size={TOOLBAR_ICON_SIZE} /> */}
            P
          </SFlexContainer>
        </SButton>
        <SButton
          isActive={blockType === 'h1'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatHeading('h1');
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <TbH1 size={TOOLBAR_ICON_SIZE} /> */}
            H1
          </SFlexContainer>
        </SButton>

        <SButton
          isActive={blockType === 'quote'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatQuote();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <MdFormatQuote size={TOOLBAR_ICON_SIZE} /> */}
            Q
          </SFlexContainer>
        </SButton>

        <SButton
          isActive={blockType === 'bullet'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatBulletList();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <MdFormatListBulleted size={TOOLBAR_ICON_SIZE} /> */}
            Bu
          </SFlexContainer>
        </SButton>

        <SButton
          isActive={blockType === 'number'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatNumberedList();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <MdFormatListNumbered size={TOOLBAR_ICON_SIZE} /> */}
            li
          </SFlexContainer>
        </SButton>

        <SButton
          isActive={blockType === 'check'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatCheckList();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <MdChecklist size={TOOLBAR_ICON_SIZE} /> */}
            ch
          </SFlexContainer>
        </SButton>

        <SButton
          isActive={blockType === 'code'}
          activeColor={colors.themeColor}
          onClick={() => {
            formatCode();
          }}
          transition="0.3s all"
        >
          <SFlexContainer align="center">
            {/* <BsCode size={TOOLBAR_ICON_SIZE} /> */}
            code
          </SFlexContainer>
        </SButton>

        {blockType === 'code' && (
          <div>
            <SSelect
              aria-label="code languages"
              value={codeLanguage}
              onChange={(event) =>
                editor.dispatchCommand(
                  CODE_LANGUAGE_COMMAND,
                  event.target.value
                )
              }
            >
              <SOption value="">JavaScript</SOption>
              {CodeLanguagesOptions.map((item) => (
                <SOption key={item.value} value={item.value}>
                  {item.label}
                </SOption>
              ))}
            </SSelect>
          </div>
        )}
      </SFlexContainer>
    </div>
  );
};
