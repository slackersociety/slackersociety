import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding: 90px 0 0 0;
  position: relative;
  max-width: 1170px;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 990px;
  }
  @media (max-width: 1400px) {
    padding: 90px 0 0 0;
  }
  @media (max-width: 1199px) {
    padding: 90px 45px 0 45px;
    max-width: 890px;
  }
  @media (max-width: 990px) {
    padding: 50px 25px 0 25px;
  }
  .pagination {
    margin-top: 80px;
    @media (max-width: 1024px) {
      margin-top: 60px;
    }
    @media (max-width: 575px) {
      margin-top: 30px;
    }
  }
`;

export const SecTitle = styled.div`
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: 16px;
  font-weight: 500;
  font-family: ${themeGet('fontFamily.0', "'Fira Sans',sans-serif")};
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: '';
    width: 68px;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
`;

export const PostRow = styled.div`
  margin: 0 -15px;
  @media (max-width: 1024px) {
    margin: 0 -10px;
  }
`;

export const PostCol = styled.div`
  margin-bottom: 30px;
  width: 50%;
  float: left;
  padding: 0 15px;
  @media (max-width: 1024px) {
    padding: 0 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const LoadMoreButton = styled.div`
  text-align: center;
  margin-top: 70px;
  @media (max-width: 990px) {
    margin-top: 50px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
`;

export default BlogPostsWrapper;
