import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PostSlideCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  background: #fff;
`;

export const PostPreview = styled.div`
  position: relative;
  overflow: hidden;
  flex: 0 0 50%;
  max-width: 50%;
  a {
    display: block;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const PostDetails = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-color: #fff;
  padding: 90px;
  transition: 0.3s ease-in-out;
  @media (max-width: 1600px) {
    padding: 60px;
  }
  @media (max-width: 1024px) {
    padding: 20px 20px 20px 0;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    order: 1;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const ReadMore = styled.div`
  button {
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
  font-weight: 700;
  color: ${themeGet('colors.textColor', '#292929')};
  margin-bottom: 40px;
  line-height: 1.41;
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 1600px) {
    font-size: 34px;
    margin-bottom: 35px;
  }
  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 990px) and (min-width: 768px) {
    font-size: 20px;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;

  span {
    display: block;
    margin-right: 15px;
    @media (max-width: 990px) {
      margin-right: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: ${themeGet('textColor', '#292929')};
    transition: 0.15s ease-in-out;
    text-transform: capitalize;
    &:hover {
      color: ${themeGet('primary', '#D10068')};
    }
    @media (max-width: 990px) {
      font-size: 13px;
    }
  }
`;

export const Excerpt = styled.p`
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('textColor', '#292929')};
  font-weight: 400;
  line-height: 2;
  margin-bottom: 80px;
  @media (max-width: 1600px) {
    margin-bottom: 60px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  @media (max-width: 990px) {
    margin-bottom: 40px;
    max-height: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 575px) {
    margin-bottom: 30px;
  }
`;
