import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import MasonryCard from '../../../components/masonry-card/masonry-card';
import Button from '../../../components/button/button';
import BlogPostsWrapper, { PostRow, PostCol, LoadMoreButton } from './style';

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          context {
            numPages
            currentPage
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 100)
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              tags
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
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const TotalPost = Data.allMarkdownRemark.edges.length;

  const [state, setState] = useState({
    visibile: 8,
  });

  const [load, setload] = useState({
    loading: false,
  });

  const fetchMoreData = () => {
    setload({ loading: true });

    setTimeout(function () {
      setState((prev) => {
        return { visibile: prev.visibile + 8 };
      });
      setload({ loading: false });
    }, 1000);
  };

  return (
    <BlogPostsWrapper>
      <PostRow>
        <Masonry className='showcase'>
          {Posts.slice(0, state.visibile).map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <PostCol key={node.fields.slug}>
                <MasonryCard
                  title={title}
                  excerpt={node.excerpt}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                />
              </PostCol>
            );
          })}
        </Masonry>

        <LoadMoreButton>
          {state.visibile < TotalPost ? (
            <Button
              title='Load more'
              type='submit'
              onClick={fetchMoreData}
              isLoading={load.loading == true ? true : false}
              loader='Loading..'
              style={{ borderRadius: 3, fontWeight: 700 }}
            />
          ) : (
            <p>No more posts</p>
          )}
        </LoadMoreButton>
      </PostRow>
    </BlogPostsWrapper>
  );
};

export default Posts;
