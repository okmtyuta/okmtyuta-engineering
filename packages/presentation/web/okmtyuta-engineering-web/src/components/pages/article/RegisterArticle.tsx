import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import { SContainer } from '../../styled/container/SContainer';
import stylingConstants from '../../../config/stylingConstants';
import { PlainEditor } from '../../ui/Editor/PlainEditor';

export const RegisterArticle = () => {
  return (
    <SContainer
      minHeight="100vh"
      backgroundColor={colors.backgroundLightGray}
      fontFamily={fonts.fontFamilies.sansSerifJa}
    >
      <SContainer padding={`${stylingConstants.padding * 4}px`}>
        <PlainEditor />
      </SContainer>
    </SContainer>
  );
};
