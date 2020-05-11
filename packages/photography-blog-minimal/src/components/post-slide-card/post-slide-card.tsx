import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import Button from '../button/button';
import {
  PostSlideCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostTags,
  PostMeta,
  ReadMore,
  Excerpt,
} from './post-slide-card.style';
interface PostSlideCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
}

const PostSlideCard: React.FunctionComponent<PostSlideCardProps> = ({
  image,
  title,
  description,
  url,
  tags,
  className,
  imageType,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (className) {
    addClass.push(className);
  }

  const handleError = () => {
    console.log('Image not load');
  };

  return (
    <PostSlideCardWrapper className={addClass.join(' ')} {...props}>
      <PostDetails className="post_details">
        <PostMeta>
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <React.Fragment key={index}>
                  {!!index && <span key={`sep-${index}`}> ,</span>}
                  <Link
                    key={index}
                    to={`/tags/${_.kebabCase(tag)}/`}
                  >{`${tag}`}</Link>
                </React.Fragment>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">{title}</PostTitle>
        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className="excerpt"
          />
        )}

        <ReadMore className="read_more">
          <Link to={url}>
            <Button title="Read More" type="submit" />
          </Link>
        </ReadMore>
      </PostDetails>

      <PostPreview className="post_preview">
        {image == null ? null : (
          <>
            {imageType === 'fluid' ? (
              <Img
                fluid={image}
                alt="post preview"
                backgroundColor="#EAE8E9"
                onError={handleError}
              />
            ) : (
              <Img fixed={image} alt="post preview" backgroundColor="#EAE8E9" />
            )}
          </>
        )}
      </PostPreview>
    </PostSlideCardWrapper>
  );
};

PostSlideCard.defaultProps = {
  imageType: 'fluid',
};

export default PostSlideCard;
