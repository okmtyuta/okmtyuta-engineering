import { SSelect, SSelectProps } from "../../../components/styled/input";

export default {
  title: 'components/input/SSelect',
  component: SSelect,
};

export const Primary = (args: SSelectProps) => (
  <SSelect
    {...args}
  >
    SCharContainer
  </SSelect>
);
