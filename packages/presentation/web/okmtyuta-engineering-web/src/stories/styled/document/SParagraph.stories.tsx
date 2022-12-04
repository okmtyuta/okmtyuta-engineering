import { SParagraph, SParagraphProps } from "../../../components/styled/document";

export default {
  title: 'components/document/SParagraph',
  component: SParagraph,
};

export const Primary = (args: SParagraphProps) => (
  <SParagraph
    {...args}
  >
    SCharContainer
  </SParagraph>
);
