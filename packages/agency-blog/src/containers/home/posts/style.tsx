import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding: 60px 75px 0 75px;
  position: relative;

  @media (max-width: 1400px) {
    padding: 60px 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 60px 25px 0 25px;
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
`

export const SecTitle = styled.div`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: 16px;
  font-weight: 500;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 68px;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
`

export const PostRow = styled.div`
  margin: 0 -15px;
  @media (max-width: 990px) {
    margin: 0 -10px;
  }
`

export const PostCol = styled.div`
  margin-bottom: 50px;
  width: 33.33333%;
  float: left;
  padding: 0 15px;
  @media (max-width: 990px) {
    padding: 0 10px;
  }
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
    margin-bottom: 40px;
  }
`

export default BlogPostsWrapper
