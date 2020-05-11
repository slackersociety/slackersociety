import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const InstShowcaseWrapper = styled.div`
  padding: 120px 0 0;
  @media (max-width: 1400px) {
    padding: 120px 0 0;
  }
  @media (max-width: 990px) {
    padding: 90px 0 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 0;
  }
`;

export const InstashowcaseRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  /* margin: 0 -5px; */
`;

export const InstashowcaseCol = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 5px;

  @media (max-width: 767px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
    &:nth-child(n + 4) {
      display: none;
    }
  }

  &.drawerGrid {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 5px;

    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
      &:nth-child(n + 4) {
        display: block;
      }
    }
  }
`;

export const ShowcaseTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${themeGet('colors.textColor', '#292929')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`;

export default InstShowcaseWrapper;
