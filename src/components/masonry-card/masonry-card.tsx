import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
  MasonryCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostExcerpt,
  ReadMore,
} from './masonry-card.style';

interface MasonryCardProps {
  image?: any;
  title: string;
  excerpt: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
  readTime?: string;
}

const MasonryCard: React.FunctionComponent<MasonryCardProps> = ({
  image,
  title,
  excerpt,
  url,
  date,
  tags,
  className,
  imageType,
  readTime,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['mesonry_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <MasonryCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        <PostExcerpt
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
        <ReadMore>
          <Link to={url}>Read More</Link>
        </ReadMore>
      </PostDetails>
    </MasonryCardWrapper>
  );
};

MasonryCard.defaultProps = {
  imageType: 'fluid',
};

export default MasonryCard;
