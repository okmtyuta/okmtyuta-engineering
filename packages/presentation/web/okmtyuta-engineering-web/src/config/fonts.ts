import { css } from 'styled-components';
import breakPoints from './breakPoints';

const h1 = {
  desktop: 42,
  mobile: 32,
};

const h2 = {
  desktop: 32,
  mobile: 26,
};

const h3 = {
  desktop: 26,
  mobile: 24,
};

const h4 = {
  desktop: 22,
  mobile: 20,
};

const h5 = {
  desktop: 20,
  mobile: 18,
};

const h6 = {
  desktop: 18,
  mobile: 16,
};

const body = {
  desktop: 16,
  mobile: 14,
};

const subBody = {
  desktop: 14,
  mobile: 14,
};

const button = {
  desktop: 16,
  mobile: 16,
};

const caption = {
  desktop: 14,
  mobile: 12,
};

const overline = {
  desktop: 12,
  mobile: 10,
};

const fontFamilies = {
  sansSerifEn: "'Hiragino Kaku Gothic ProN', sans-serif",
  sansSerifJa: "'Hiragino Kaku Gothic ProN', sans-serif",
  anton: "'Anton', sans-serif",
};

const fontSizes = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  subBody,
  button,
  caption,
  overline,
};

export type fontSizeTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'subBody'
  | 'button'
  | 'caption'
  | 'overline';

export const fontSizing = (fontSizeType: fontSizeTypes) => {
  return css`
    @media screen and (min-width: ${breakPoints.pcMin}px) {
      font-size: ${fontSizes[fontSizeType].desktop}px;
    }
    @media screen and (min-width: ${breakPoints.tabMin}px) and (max-width: ${breakPoints.tabMax}px) {
      font-size: ${fontSizes[fontSizeType].mobile}px;
    }
    @media (max-width: ${breakPoints.spMax}px) {
      font-size: ${fontSizes[fontSizeType].mobile}px;
    }
  `;
};

const fonts = {
  fontFamilies,
  fontSizes,
};

export default fonts;
