import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
  ImageCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  ReadingTime,
} from './image-card.style';

interface ImageCardProps {
  image?: any;
  title: string;
  url: string;
  className?: string;
  imageType?: 'fixed' | 'fluid';
  readTime?: string;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({
  image,
  title,
  url,
  className,
  imageType,
  readTime,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (className) {
    addClass.push(className);
  }

  return (
    <ImageCardWrapper className={addClass.join(' ')} {...props}>
      <Link to={url}>
        {image == null ? null : (
          <PostPreview className="post_preview">
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </PostPreview>
        )}

        <PostDetails className="post_details">
          <PostTitle className="post_title">
            <span>{title}</span>
          </PostTitle>
          <ReadingTime className="read_time">
            <span>{readTime}</span>
          </ReadingTime>
        </PostDetails>
      </Link>
    </ImageCardWrapper>
  );
};

ImageCard.defaultProps = {
  imageType: 'fluid',
};

export default ImageCard;
