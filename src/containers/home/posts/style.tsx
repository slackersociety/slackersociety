import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlogPostsWrapper = styled.div`
  padding: 100px 0 0;
  position: relative;

  @media (max-width: 1400px) {
    padding: 100px 0 0;
  }
  @media (max-width: 990px) {
    padding: 60px 0 0;
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
  @media (max-width: 990px) {
    margin: 0 -10px;
  }
`;

export const PostCol = styled.div`
  margin-bottom: 30px;
  width: 50%;
  float: left;
  padding: 0 15px;
  @media (max-width: 990px) {
    padding: 0 10px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const LoadMoreButton = styled.div`
  text-align: center;
  margin-top: 50px;

  .button {
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
      background-color: ${themeGet('primary', '#D10068')};
    }
  }
  @media (max-width: 990px) {
    margin-top: 50px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
`;

export default BlogPostsWrapper;
