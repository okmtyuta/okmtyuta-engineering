import { SButton, SButtonProps } from "../../../components/styled/input";

export default {
  title: 'components/input/SButton',
  component: SButton,
};

export const Primary = (args: SButtonProps) => (
  <SButton
    {...args}
  >
    SCharContainer
  </SButton>
);
