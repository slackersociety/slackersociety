import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding: 90px 75px 0 75px;
  position: relative;

  @media (max-width: 1400px) {
    padding: 90px 35px 0 35px;
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

export const SectTitleWrapper = styled.div`
  margin-bottom: 45px;
`;

export const SecTitle = styled.h2`
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: 30px;
  font-weight: 700;
  position: relative;
  margin-bottom: 5px;
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

export const SecSubTitle = styled.p``;

export const PostRow = styled.div`
  margin: 0 -8px;
`;

export const PostCol = styled.div`
  margin-bottom: 16px;
  width: 33.33333%;
  float: left;
  padding: 0 8px;
  @media (max-width: 767px) {
    width: 50%;
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
