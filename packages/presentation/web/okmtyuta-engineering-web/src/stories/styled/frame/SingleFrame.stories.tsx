import {
  SingleFrame,
  SingleFrameProps,
} from '../../../components/styled/frame';

export default {
  title: 'components/frame/SingleFrame',
  component: SingleFrame,
};

export const Primary = (args: SingleFrameProps) => (
  <SingleFrame {...args}>SFlexContainer</SingleFrame>
);
