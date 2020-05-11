import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PostSliderWrapper = styled.div`
  && {
    .swiper-pagination {
      bottom: 0;

      .swiper-pagination-bullet-active {
        background: ${themeGet('colors.textColor', '#292929')};
        width: 10px;
        height: 10px;
        vertical-align: middle;
      }
    }
  }
`;

export const PrevButton = styled.div`
  position: absolute;
  display: block;
  bottom: 20%;
  left: 0;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: #292929;
  cursor: pointer;
  outline: none;
  &.swiper-button-disabled {
    color: #a0a0a0;
    pointer-events: none;
    svg,
    path {
      fill: #a0a0a0;
    }
  }
`;

export const NextButton = styled.div`
  position: absolute;
  display: block;
  bottom: 20%;
  right: 0;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: #292929;
  cursor: pointer;
  outline: none;
  &.swiper-button-disabled {
    color: #a0a0a0;
    pointer-events: none;
    svg,
    path {
      fill: #a0a0a0;
    }
  }
`;

export default PostSliderWrapper;
