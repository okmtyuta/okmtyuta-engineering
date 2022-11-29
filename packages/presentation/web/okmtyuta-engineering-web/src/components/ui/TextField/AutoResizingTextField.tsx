import { useRef, useEffect, useState } from 'react';
import { STextArea } from '../../styled/input/STextArea';
import IStyled from '../../styled/IStyled';

interface AutoResizingTextFieldProps extends IStyled {
  placeholder?: string;
  border?: string;
}

function useAutoResizeTextArea(
  value: string | undefined,
  height: string | undefined
) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } =
      getComputedStyle(element);

    element.style.height = height || 'auto';
    element.style.height = `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`;
  }, [value]);

  return ref;
}

export const AutoResizingTextField = (props: AutoResizingTextFieldProps) => {
  const [value, setValue] = useState('');
  const textAreaRef = useAutoResizeTextArea(value, props.height);

  return (
    <STextArea
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      border={props.border}
      margin={props.margin}
      padding={props.padding}
      width={props.width}
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      color={props.color}
      backgroundColor={props.backgroundColor}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={textAreaRef}
    />
  );
};
