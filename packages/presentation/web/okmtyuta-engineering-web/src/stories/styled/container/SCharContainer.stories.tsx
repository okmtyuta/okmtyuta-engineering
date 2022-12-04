import { SCharContainer } from '../../../components/styled/container';
import { SCharContainerProps } from '../../../components/styled/container/SCharContainer';

export default {
  title: 'components/container/SCharContainer',
  component: SCharContainer,
};

export const Default = (args: SCharContainerProps) => (
  <SCharContainer {...args}>This is Container for Character</SCharContainer>
);
