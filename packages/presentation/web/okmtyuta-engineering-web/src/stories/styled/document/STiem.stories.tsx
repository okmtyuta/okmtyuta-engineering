import { STime, STimeProps } from "../../../components/styled/document";

export default {
  title: 'components/document/STime',
  component: STime,
};

export const Primary = (args: STimeProps) => (
  <STime
    {...args}
  >
    SCharContainer
  </STime>
);
