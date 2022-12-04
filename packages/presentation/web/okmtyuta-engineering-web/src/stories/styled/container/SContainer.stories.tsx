import { SContainer } from "../../../components/styled/container";
import { SContainerProps } from "../../../components/styled/container/SContainer";

export default {
  title: "components/container/SContainer",
  component: SContainer,
}

export const Primary = (args: SContainerProps) => (
  <SContainer {...args} />
)
