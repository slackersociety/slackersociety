import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PostSliderWrapper = styled.div`
  padding: 0 75px;
  @media (max-width: 1400px) {
    padding: 0 45px;
  }
  @media (max-width: 990px) {
    padding: 0 25px;
  }
`;

export const PrevButton = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  right: 82px;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themeGet('colors.textColor', '#292929')};
  z-index: 2;
  color: #fff;
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
  @media (max-width: 767px) {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 40px;
  }
`;

export const NextButton = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${themeGet('colors.textColor', '#292929')};
  z-index: 2;
  color: #fff;
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
  @media (max-width: 767px) {
    top: 50%;
    transform: translateY(-50%);
    rihgt: 0;
    width: 40px;
  }
`;

export default PostSliderWrapper;
