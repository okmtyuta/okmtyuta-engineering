import { SList, SListProps } from "../../../components/styled/list";

export default {
  title: 'components/list/SList',
  component: SList,
};

export const Primary = (args: SListProps) => (
  <SList
    {...args}
  >
    SCharContainer
  </SList>
);
