import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MasonryCardWrapper = styled.div`
  position: relative;
  background-color: #f7f7f7;
  border-radius: 3px;
  overflow: hidden;
  &:hover {
    .post_preview {
      a {
        transform: scale(1.05);
      }
    }
  }
`;

export const PostPreview = styled.div`
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 3px;
  }
  a {
    display: block;
    transition: 0.25s ease-in-out;
  }
`;

export const PostDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 60px 35px;

  @media (max-width: 1200px) {
    padding: 30px 40px;
  }
  @media (max-width: 990px) {
    padding: 30px;
  }
  @media (max-width: 575px) {
    padding: 20px 30px;
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
  font-size: 35px;
  font-weight: 400;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 1.65;
  margin-bottom: 15px;
  text-align: center;
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 990px) {
    font-size: 24px;
  }
`;

export const PostExcerpt = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${themeGet('colors.textLightColor', '#595959')};
  line-height: 2;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 990px) {
    font-size: 15px;
  }
`;
