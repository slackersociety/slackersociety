import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export const IntroWrapper = styled.div`
  padding: 190px 10px 190px 10px;
  position: relative;
  @media (max-width: 1400px) {
    padding: 120px 10px 120px 10px;
  }
  @media (max-width: 1200px) {
    padding: 100px 10px 100px 10px;
  }
  @media (max-width: 990px) {
    padding: 70px 10px 70px 10px;
  }
  @media (max-width: 575px) {
    padding: 50px 25px 80px 25px;
  }
`

export const IntroContentWrapper = styled.div`
  width: 740px;
  max-width: 100%;
  margin: 0 auto;

  text-align: center;
  position: relative;
`

export const IntroImage = styled.div`
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid ${themeGet("colors.lightBorderColor", "#ededed")};
  margin-bottom: 30px;
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }
`

export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  color: ${themeGet("colors.textColor", "#292929")};
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`

export const Desciption = styled.p`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: ${themeGet("fontSizes.3", "15")}px;
  line-height: ${themeGet("lineHeights.text", "2")};
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

export const BgText = styled.div`
  font-size: 400px;
  font-weight: 700;
  line-height: 1;
  color: #292929;
  opacity: 0.02;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  pointer-events: none;
  transform: translateY(-50%);
  @media (max-width: 1500px) {
    font-size: 350px;
  }
  @media (max-width: 1199px) {
    font-size: 270px;
  }
  @media (max-width: 990px) {
    font-size: 200px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
