import React from 'react';
import { graphql } from 'gatsby';
import ResetCss from '../components/reset-css';
import SEO from '../components/seo';
import NotFound from '../containers/not-found';

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <SEO title="404: Not Found" />
      <NotFound />
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
