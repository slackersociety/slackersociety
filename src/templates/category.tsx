import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
// import PostCard from '../components/post-card/post-card';
import Masonry from 'react-masonry-component';
import MasonryCard from '../components/masonry-card/masonry-card';
import SEO from '../components/seo';
import {
  TagPostsWrapper,
  TagPageHeading,
  TagName,
  PostRow,
  CategoryPostCol,
} from './templates.style';

const Category = ({ pageContext, data }: any) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO
        title={category}
        description={`A collection of ${totalCount} post`}
      />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{category}</TagName>
          {`A collection of ${totalCount} post`}
        </TagPageHeading>
        <PostRow>
          <Masonry className='showcase'>
            {edges.map(({ node, index }: any) => (
              <CategoryPostCol key={node.fields.slug}>
                <MasonryCard
                  title={node.frontmatter.title}
                  excerpt={node.excerpt}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                />
              </CategoryPostCol>
            ))}
          </Masonry>
        </PostRow>
      </TagPostsWrapper>
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 570, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
