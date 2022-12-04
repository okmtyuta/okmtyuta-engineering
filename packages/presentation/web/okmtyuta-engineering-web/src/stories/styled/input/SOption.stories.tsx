import { SOption, SOptionProps } from "../../../components/styled/input";

export default {
  title: 'components/input/SOption',
  component: SOption,
};

export const Primary = (args: SOptionProps) => (
  <SOption
    {...args}
  >
    SCharContainer
  </SOption>
);
