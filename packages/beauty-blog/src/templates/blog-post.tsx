import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import PostCard from '../components/post-card/post-card';
import PostDetails from '../components/post-details/post-details';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from 'react-share';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoReddit,
} from 'react-icons/io';

import {
  BlogPostDetailsWrapper,
  PostPaginationWrapper,
  GridIcon,
  PrevButton,
  NextButton,
  PostName,
  Text,
  ThumbImg,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  BlogPostComment,
} from './templates.style';
import Icon from '../images/grid.svg';
import IconNext from '../images/arrow-next.svg';
import IconPrev from '../images/arrow-prev.svg';
import { backgroundColor } from 'styled-system';

const BlogPostTemplate = ({ pageContext, ...props }: any) => {
  const post = props.data.markdownRemark;
  const { edges } = props.data.allMarkdownRemark;
  const title = post.frontmatter.title;
  const slug = post.fields.slug;
  const siteUrl = props.data.site.siteMetadata.siteUrl;
  const shareUrl = urljoin(siteUrl, slug);
  const { next, previous } = pageContext;

  const disqusConfig = {
    shortname: process.env.DISQUS_NAME,
    config: { identifier: slug, title },
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          categories={post.frontmatter.categories}
          preview={
            post.frontmatter.cover == null
              ? null
              : post.frontmatter.cover.childImageSharp.fluid
          }
          description={post.html}
        />

        <BlogPostFooter
          className={post.frontmatter.cover == null ? 'center' : ''}
        >
          <PostShare>
            <FacebookShareButton url={shareUrl} quote={post.excerpt}>
              <IoLogoFacebook size="23px" />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <IoLogoTwitter size="23px" />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
              <IoLogoLinkedin size="23px" />
            </LinkedinShareButton>
            <RedditShareButton
              url={shareUrl}
              title={`${post.frontmatter.title}`}
            >
              <IoLogoReddit size="23px" />
            </RedditShareButton>
          </PostShare>
        </BlogPostFooter>

        <PostPaginationWrapper>
          <PrevButton>
            {next && (
              <Link to={next.fields.slug}>
                <Text>
                  <img src={IconPrev} alt="<" />
                  &nbsp; Previous
                </Text>
                <PostName>
                  <ThumbImg>
                    <img
                      src={
                        next.frontmatter.cover == null
                          ? null
                          : next.frontmatter.cover.childImageSharp.fluid.srcWebp
                      }
                      alt={next.frontmatter.title}
                    />
                  </ThumbImg>
                  <span>{next.frontmatter.title}</span>
                </PostName>
              </Link>
            )}
          </PrevButton>

          <GridIcon>
            <img src={Icon} alt="Grid Icon" />
          </GridIcon>

          <NextButton>
            {previous && (
              <Link to={previous.fields.slug}>
                <Text>
                  Next &nbsp;
                  <img src={IconNext} alt=">" />
                </Text>
                <PostName>
                  <ThumbImg>
                    <img
                      src={
                        previous.frontmatter.cover == null
                          ? null
                          : previous.frontmatter.cover.childImageSharp.fluid
                              .srcWebp
                      }
                      alt={previous.frontmatter.title}
                    />
                  </ThumbImg>
                  <span>{previous.frontmatter.title}</span>
                </PostName>
              </Link>
            )}
          </NextButton>
        </PostPaginationWrapper>

        <BlogPostComment
          className={post.frontmatter.cover == null ? 'center' : ''}
        >
          <DiscussionEmbed {...disqusConfig} />
        </BlogPostComment>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.fields.slug}>
                <PostCard
                  title={node.frontmatter.title || node.fields.slug}
                  excerpt={node.excerpt}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tag: [String!]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        categories
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1170, maxHeight: 580, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tag } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 80)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480, maxHeight: 285, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
