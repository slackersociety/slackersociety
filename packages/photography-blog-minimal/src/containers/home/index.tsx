import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import SimpleSwiper from './post-slider';

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
