import * as React from 'react';
import PersonalBlogWrapper from './style';
import SimpleSwiper from './post-slider';
import Posts from './posts';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <SimpleSwiper />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
