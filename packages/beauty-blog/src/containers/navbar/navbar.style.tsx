import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HeaderWrapper = styled.header`
  background-color: #fff;
  position: relative;
  z-index: 99999;
  transition: 0.25s ease-in-out;
`;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  width: 1170px;
  padding: 30px 15px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 20px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: 0.25s ease-in-out;
  width: 1170px;
  padding: 30px 15px;
  margin: 0 auto;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 150px;
  margin-left: auto;
  margin-right: calc(50% - 160px);
  flex-shrink: 0;
  @media (max-width: 990px) {
    margin-left: 0;
    margin-right: auto;
  }
  @media (max-width: 575px) {
    max-width: 90px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const MenuItemWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 0 20px;
  list-style: none;
  a {
    padding: 5px 10px;
    white-space: nowrap;
    font-size: ${themeGet('fontSizes.3', '15')}px;
    line-height: ${themeGet('lineHeights.normal', '1')};
    font-weight: ${themeGet('fontWeights.3', '400')};
    color: ${themeGet('colors.lightTextColor', '#757575')};
    transition: 0.15s ease-in-out;

    &:hover {
      color: ${themeGet('colors.textColor', '#292929')};
    }
    &.active-link {
      color: ${themeGet('colors.textColor', '#292929')};
      font-weight: ${themeGet('fontWeights.6', '700')};
    }
  }
`;

export const NavSearchButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  padding: 5px 0 5px 10px;
  margin-right: 30px;
  cursor: pointer;
  svg {
    display: block;
  }
`;

export const SearchCloseButton = styled.button`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  cursor: pointer;
  z-index: 1;
  padding: 0;
  color: #757575;
  font-size: 45px;
  margin-left: -54px;
  @media (max-width: 990px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
  }
  svg {
    display: block;
  }
`;

export const SocialProfileWrapper = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  height: 0;
  visibility: hidden;
  transition: 0.35s ease-in-out;

  > * {
    opacity: 0;
    transition: 0.35s ease-in-out;
  }

  &.expand {
    height: 145px;
    visibility: visible;
    @media (max-width: 1199px) {
      height: 120px;
    }
    @media (max-width: 990px) {
      height: 100px;
    }
    @media (max-width: 767px) {
      height: 75px;
    }
    .nav-search-input,
    > * {
      opacity: 1;
    }
  }

  .nav-search-input {
    width: 870px;
    transition: 0.35s ease-in-out;

    .inner-wrap {
      .search-icon {
        width: 70px;
      }
      input,
      .icon-left {
        height: 54px;
        padding: 0 70px;
        border-radius: 3px;
        ::placeholder {
          color: #757575;
        }
      }
    }
  }
`;

export const NavSearchFromWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: 100%;
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
    padding: 0 45px;
  }
  @media (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const SocialProfiles = styled.div`
  margin-top: 60px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: #292929;
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

export const DrawerContentWrapper = styled.div`
  padding: 30px;
  .mobile-menu {
    display: block;
    padding-top: 60px;
    li {
      margin: 0 0 30px 0;
      a {
        display: block;
        position: relative;
        padding-left: 0;
        padding-right: 30px;
        display: flex;
        align-items: center;
        &.active-link {
          font-weight: 700;
          &:after {
            opacity: 1;
          }
        }
        &:after {
          content: '';
          width: 6px;
          height: 6px;
          display: block;
          margin-left: 5px;
          border-radius: 50%;
          opacity: 0;
          background: ${themeGet('colors.textColor', '#292929')};
        }
      }
    }
  }
`;

export const DrawerContentBlock = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DrawerContentTitle = styled.span`
  font-size: ${themeGet('fontSizes.4', '16')}px;
  font-weight: ${themeGet('fontWeights.6', '700')};
  color: ${themeGet('colors.textColor', '#292929')};
  margin-bottom: 30px;
`;

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3px 0;
`;

export const DrawerClose = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${themeGet('colors.lightTextColor', '#757575')};
  font-size: 23px;
  color: ${themeGet('colors.white', '#ffffff')};
`;

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

export const HamburgerIconSquare = styled.div`
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: ${themeGet('colors.textColor', '#292929')};
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

export default HeaderWrapper;
