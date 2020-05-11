import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const NewsletterWrapper = styled.div`
  border-radius: 3px;
  margin-top: 120px;
  background: ${themeGet('colors.inactiveField', '#F7F7F7')};
  padding: 50px;
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px;
    margin-top: 80px;
  }
`;

export const NewsletterTitle = styled.p`
  font-size: 25px;
  font-family: 'PT Serif', sans-serif;
  color: ${themeGet('colors.textColor', '#292929')};
  font-weight: ${themeGet('fontWeights.3', '400')};
  line-height: 1.5;
  flex: 0 0 50%;
  max-width: 50%;
  margin: 0;
  padding-right: 30px;

  @media (max-width: 900px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
    padding: 0;
    text-align: center;
  }
`;

export const NewsletterInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 56px;
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 900px) {
    flex: 0 0 100%;
    max-width: 100%;
    min-width: 450px;
  }

  @media (max-width: 570px) {
    min-width: 100%;
  }

  .field-wrapper {
    flex-grow: 1;
    @media (max-width: 460px) {
      width: 100%;
    }
    .inner-wrap {
      input {
        border-width: 0;
        border-color: ${themeGet('colors.textColor', '#292929')};
        height: 56px;
        font-size: 16px;

        @media (max-width: 460px) {
          text-align: center;
        }
      }
    }
  }
  .button {
    height: 56px;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
      background-color: ${themeGet('primary', '#D10068')};
    }

    @media (max-width: 460px) {
      width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.div`
  flex: 0 0 50%;
  margin-top: 10px;
  margin-left: 15px;
  text-align: justify;
  font-size: 14px;

  > span {
    color: #d8000c;
  }
  a {
    color: #d10068;
  }
`;

export const SuccessMessage = styled.div`
  font-size: 22px;
  line-height: 1.7;
  text-align: center;
  width: 100%;

  @media (max-width: 990px) {
    font-size: 18px;
  }
  @media (max-width: 575px) {
    font-size: 16px;
  }
`;
