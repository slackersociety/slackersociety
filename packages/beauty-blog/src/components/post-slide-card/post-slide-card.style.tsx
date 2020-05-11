import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Buttons from '../button/button';

export const Button = styled(Buttons)`
  border-radius: 3px;
  font-size: 14px;
`;

export const PostSlideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
`;

export const PostPreview = styled.div`
  position: relative;
  overflow: hidden;
  flex: 0 0 100%;
  max-width: 100%;
  a {
    display: block;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const PostDetails = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  background-color: #fff;
  padding: 30px 120px;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1600px) {
    padding: 30px 90px 50px;
  }
  @media (max-width: 1024px) {
    padding: 20px 30px 40px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    order: 1;
  }
`;

export const ReadMore = styled.div`
  button {
    text-transform: uppercase;
    font-weight: 700;
    &:hover {
      background-color: ${themeGet('primary', '#D10068')};
    }
    @media (max-width: 1024px) {
      font-size: 14px;
      height: 42px;
      padding: 0 22px;
    }
  }
`;

export const PostTitle = styled.h2`
  font-size: 48px;
  font-weight: 400;
  color: ${themeGet('colors.textColor', '#292929')};
  margin-bottom: 20px;
  line-height: 1.5;
  max-width: 70%;
  text-align: center;
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 990px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

export const Excerpt = styled.p`
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('colors.textLightColor', '#5e5e5e')};
  font-weight: 400;
  line-height: 2;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 1600px) {
    margin-bottom: 30px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  @media (max-width: 990px) {
    margin-bottom: 20px;
    max-height: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`;
