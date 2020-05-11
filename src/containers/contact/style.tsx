import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ContactWrapper = styled.div`
  margin: 0 auto;
  padding-top: 70px;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 990px) {
    padding: 80px 15px 30px;
  }
  @media (max-width: 575px) {
    padding: 60px 15px 0;
  }
`;

export const ContactPageTitle = styled.div`
  margin-bottom: 90px;
  @media (max-width: 990px) {
    margin-bottom: 60px;
  }

  p {
    color: ${themeGet('colors.lightTextColor', '#757575')};
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet('colors.textColor', '#292929')};
    line-height: 1.53;
    margin-bottom: 15px;
    @media (max-width: 990px) {
      font-size: 26px;
      margin-bottom: 12px;
    }
    @media (max-width: 575px) {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

export const ContactFromWrapper = styled.div`
  position: relative;
  .button {
    margin-top: 60px;
    @media (max-width: 575px) {
      margin-top: 40px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .field-wrapper {
    flex-grow: 1;
    max-width: calc(50% - 30px);
    margin-bottom: 60px;
    @media (max-width: 575px) {
      max-width: 100%;
      margin-bottom: 40px;
    }
  }
`;
