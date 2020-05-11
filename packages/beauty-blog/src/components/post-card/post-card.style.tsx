import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PostCardWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: #f7f7f7;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover {
    .post_preview {
      a {
        transform: scale(1.05);
      }
    }
  }
`;

export const PostPreview = styled.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  img {
    max-width: 100%;
    border-radius: 3px;
    max-height: 390px;
  }
  a {
    display: block;
    transition: 0.25s ease-in-out;
  }
`;

export const PostDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media (max-width: 1200px) {
    padding: 30px 20px;
  }
  @media (max-width: 990px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 20px 15px;
  }
`;

export const ReadMore = styled.div`
  a {
    font-size: 14px;
    font-weight: 700;
    color: ${themeGet('colors.textColor', '#292929')};
    background-color: ${themeGet('colors.white', '#ffffff')};
    text-transform: uppercase;
    padding: 13px 30px;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    transition: 0.15s ease-in-out;
    @media (max-width: 990px) {
      font-size: 14px;
    }
    &:hover {
      background-color: ${themeGet('colors.textColor', '#292929')};
      color: ${themeGet('colors.white', '#ffffff')};
      text-decoration: none;
    }
  }
`;

export const PostTitle = styled.h2`
  font-size: 25px;
  font-weight: 400;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: center;
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${themeGet('colors.textColor', '#292929')};
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 990px) {
    font-size: 24px;
  }

  @media (max-width: 767px) {
    max-height: none;
  }
`;

export const PostExcerpt = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${themeGet('colors.textLightColor', '#5e5e5e')};
  line-height: 1.5;
  margin-bottom: 20px;
  margin-top: auto;
  text-align: center;
  @media (max-width: 990px) {
    font-size: 15px;
  }
`;
