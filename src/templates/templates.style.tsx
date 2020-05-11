import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding: 120px 75px 0 75px;
  position: relative;

  @media (max-width: 1400px) {
    padding: 120px 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 80px 25px 0 25px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`;

export const PostPaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;
  margin-top: 60px;
  border-top: 1px solid ${themeGet('colors.inactiveBG', '#e6e6e6')};
  border-bottom: 1px solid ${themeGet('colors.inactiveBG', '#e6e6e6')};
`;
export const PostName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  transition: all 0.35s ease;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  opacity: 1;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  transition: all 0.35s ease;
`;

export const ThumbImg = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PrevButton = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 20px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    span {
      font-family: ${themeGet('fontFamily.1', "'PT Serif', sans-serif")};
      color: ${themeGet('colors.textColor', '#292929')};
      font-size: 18px;
      font-weight: 400;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      &:hover {
        ${PostName} {
          opacity: 1;
        }

        ${Text} {
          opacity: 0;
        }
      }
    }

    @media (max-width: 767px) {
      ${PostName} {
        display: none;
      }

      ${Text} {
        opacity: 1;
      }
    }
  }
`;

export const NextButton = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 20px;
    overflow: hidden;
    justify-content: flex-end;
    position: relative;
    span {
      font-family: ${themeGet('fontFamily.1', "'PT Serif', sans-serif")};
      color: ${themeGet('colors.textColor', '#292929')};
      font-size: 18px;
      font-weight: 400;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Text} {
      justify-content: flex-end;
    }

    ${ThumbImg} {
      order: 1;
      margin-left: 20px;
      margin-right: 0;
    }

    ${PostName} {
      justify-content: flex-end;
    }

    span {
      order: 0;
    }

    @media (min-width: 768px) {
      &:hover {
        ${PostName} {
          opacity: 1;
        }

        ${Text} {
          opacity: 0;
        }
      }
    }

    @media (max-width: 767px) {
      ${PostName} {
        display: none;
      }

      ${Text} {
        opacity: 1;
      }
    }
  }
`;

export const GridIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 30px;

  img {
    width: 100%;
  }
`;

export const RelatedPostWrapper = styled.div`
  margin: 0 auto;
  @media (max-width: 575px) {
    padding: 0 15px;
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

export const RelatedPostTitle = styled.h2`
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: 35px;
  font-weight: 400;
  position: relative;
  margin-bottom: 60px;
  text-align: center;
`;

export const RelatedPostItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const RelatedPostItem = styled.div`
  flex: 0 0 33.333333333%;
  max-width: 33.333333333%;
  padding: 0 15px;
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    &:nth-child(n + 2) {
      margin-top: 50px;
    }
  }
  .post_card {
    &:hover {
      .post_preview {
        a {
          transform: scale(1.05);
        }
      }
    }
  }
`;
export const TagPostsWrapper = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }

  .post_card {
    margin-bottom: 120px;
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 990px) {
      margin-bottom: 80px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
`;
export const TagPageHeading = styled.div`
  /* padding-left: 210px; */
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 60px;
  position: relative;
  @media (max-width: 1200px) {
    padding-left: 160px;
  }
  @media (max-width: 990px) {
    padding-left: 0;
    font-size: 13px;
    margin-bottom: 80px;
  }
  @media (max-width: 575px) {
    margin-bottom: 60px;
  }

  &:after {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
    background: #292929;
    margin-top: 15px;
  }
`;

export const TagName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${themeGet('colors.primary', '#D10068')};
  margin-bottom: 8px;
  @media (max-width: 990px) {
    font-size: 26px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;
export const BlogPostFooter = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 990px) {
    padding-top: 40px;
    width: 100%;
  }
  &.center {
    margin: 0 auto;
  }
`;

export const BlogPostComment = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 80px;
  @media (max-width: 990px) {
    padding-top: 60px;
    width: 100%;
  }
  &.center {
    margin: 0 auto;
  }
`;

export const PostShare = styled.div`
  display: flex;
  align-items: center;
  > span {
    flex-shrink: 0;
  }
  > div,
  .react-share__ShareButton {
    cursor: pointer;
    margin-left: 25px;
    font-size: 22px;
    outline: 0;
    color: ${themeGet('colors.textColor', '#292929')};
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.primary', '#D10068')};
    }
    svg {
      display: block;
    }
  }
`;

export const BlogPostDetailsWrapper = styled.div`
  margin: 0 auto;
  width: 1170px;
  max-width: 100%;
  padding-bottom: 120px;
  @media (max-width: 810px) {
    padding: 0 15px;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 575px) {
    display: none;
  }

  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: ${themeGet('primary', '#D10068')};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;

export const PostRow = styled.div`
  margin: 0 -15px;
  @media (max-width: 990px) {
    margin: 0 -10px;
  }
`;

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
`;

export const CategoryPostCol = styled.div`
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
