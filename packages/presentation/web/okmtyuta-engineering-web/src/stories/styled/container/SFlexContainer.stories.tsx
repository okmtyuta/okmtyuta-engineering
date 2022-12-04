import { SFlexContainer } from '../../../components/styled/container';
import { SFlexContainerProps } from '../../../components/styled/container/SFlexContainer';

export default {
  title: 'components/container/SFlexContainer',
  component: SFlexContainer,
};

export const Primary = (args: SFlexContainerProps) => (
  <SFlexContainer {...args}>SFlexContainer</SFlexContainer>
);
