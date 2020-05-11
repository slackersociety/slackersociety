import React from 'react';
import Sticky from 'react-stickynode';
import styled, { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Navbar from './navbar/navbar';
import Newsletter from '../components/newsletter/newsletter';
import Footer from './footer/footer';
import ScrollUpButton from '../components/scroll-up-button/scroll-up-button';
import InstagramShowcase from './instagram-showcase';
import ResetCss from '../components/reset-css';
import { theme } from '../theme';

const Wrapper = styled.div`
  width: 1170px;
  padding: 30px 15px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px 20px;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        <Wrapper>
          {children}

          <InstagramShowcase />
          <Newsletter />
          <Footer>
            Copyright &copy; {new Date().getFullYear()}
            <a href="https://redq.io/"> RedQ, Inc.</a>
          </Footer>
        </Wrapper>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default Layout;
