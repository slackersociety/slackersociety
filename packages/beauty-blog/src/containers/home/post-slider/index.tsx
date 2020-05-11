import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import PostSlideCard from '../../../components/post-slide-card/post-slide-card';
import PostSliderWrapper, { PrevButton, NextButton } from './style';

const SimpleSwiper = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { eq: "featured" } } }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 190)
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
                  fluid(maxWidth: 1170, maxHeight: 520, quality: 100) {
                    ...GatsbyImageSharpFluid
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

  const params = {
    navigation: {
      prevEl: '.ps-button-prev',
      nextEl: '.ps-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    renderPrevButton: () => (
      <PrevButton className="ps-button-prev" aria-label="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="20"
          viewBox="0 0 11 20"
        >
          <path
            id="Path_21330"
            data-name="Path 21330"
            d="M97.534,10.99l8.3,8.6a1.317,1.317,0,0,0,1.911,0,1.437,1.437,0,0,0,0-1.98L100.4,10l7.342-7.609a1.437,1.437,0,0,0,0-1.981,1.318,1.318,0,0,0-1.911,0l-8.3,8.6a1.437,1.437,0,0,0,0,1.98Z"
            transform="translate(-97.139 0)"
            fill="currentColor"
          />
        </svg>
      </PrevButton>
    ),
    renderNextButton: () => (
      <NextButton className="ps-button-next" aria-label="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="20"
          viewBox="0 0 11 20"
        >
          <path
            id="Path_21330"
            data-name="Path 21330"
            d="M107.743,10.99l-8.3,8.6a1.317,1.317,0,0,1-1.911,0,1.437,1.437,0,0,1,0-1.98L104.876,10,97.534,2.391a1.437,1.437,0,0,1,0-1.981,1.318,1.318,0,0,1,1.911,0l8.3,8.6a1.437,1.437,0,0,1,0,1.98Z"
            transform="translate(-97.139 0)"
            fill="currentColor"
          />
        </svg>
      </NextButton>
    ),
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    speed: 600,
  };

  return (
    <PostSliderWrapper>
      <Swiper {...params}>
        {Posts.map(({ node }: any) => (
          <div key={node.fields.slug}>
            <PostSlideCard
              title={node.frontmatter.title || node.fields.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={node.fields.slug}
              tags={node.frontmatter.tags}
              description={node.frontmatter.description || node.excerpt}
            ></PostSlideCard>
          </div>
        ))}
      </Swiper>
    </PostSliderWrapper>
  );
};

export default SimpleSwiper;
