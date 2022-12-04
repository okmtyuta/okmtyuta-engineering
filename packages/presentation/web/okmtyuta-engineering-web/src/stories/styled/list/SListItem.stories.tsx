import { SListItem, SListItemProps } from "../../../components/styled/list";

export default {
  title: 'components/list/SListItem',
  component: SListItem,
};

export const Primary = (args: SListItemProps) => (
  <SListItem
    {...args}
  >
    SCharContainer
  </SListItem>
);
