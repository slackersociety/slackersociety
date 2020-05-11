import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import MasonryCard from "../../../components/masonry-card/masonry-card"
import Pagination from "../../../components/pagination/pagination"
import BlogPostsWrapper, { PostRow, PostCol, SecTitle } from "./style"

type PostsProps = {}

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
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 6
        skip: 3
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
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
  `)

  const Posts = Data.allMarkdownRemark.edges
  const TotalPage = Data.allSitePage.nodes[0].context.numPages
  const CurrentPage = Data.allSitePage.nodes[0].context.currentPage

  return (
    <BlogPostsWrapper>
      <SecTitle>Latest Stories</SecTitle>
      <PostRow>
        <Masonry className="showcase">
          {Posts.map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostCol key={node.fields.slug}>
                <MasonryCard
                  title={title}
                  image={
                    node.frontmatter.cover == null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  readTime={node.fields.readingTime.text}
                />
              </PostCol>
            )
          })}
        </Masonry>
      </PostRow>
      {TotalPage >> 1 ? (
        <Pagination
          nextLink="/page/2"
          currentPage={CurrentPage}
          totalPage={TotalPage}
          className="pagination"
        />
      ) : (
        ""
      )}
    </BlogPostsWrapper>
  )
}

export default Posts
