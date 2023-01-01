import { useRef, useEffect, useState } from 'react';
import { STextArea } from '../../styled/input/STextArea';
import IStyled from '../../styled/IStyled';

interface AutoResizingTextFieldProps extends IStyled {
  placeholder?: string;
  border?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const useAutoResizeTextArea = (
  value: string | undefined,
  height: string | undefined
) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const { borderTopWidth, borderBottomWidth } = getComputedStyle(element);

    element.style.height = height || '1em';
    element.style.height = `calc(${element.scrollHeight}px + ${borderTopWidth} + ${borderBottomWidth})`;
  }, [value]);

  return ref;
};

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
      onChange={(event) => {
        setValue(event.target.value);
        
        if (props.onChange){
          props.onChange(event);
        }
      }}
      ref={textAreaRef}
    />
  );
};
