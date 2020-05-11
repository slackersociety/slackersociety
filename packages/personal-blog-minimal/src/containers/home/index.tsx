import * as React from 'react';
import PersonalBlogWrapper from './style';
import Intro from './intro';
import Posts from './posts';
import FeaturedPosts from './featured-post';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
      <FeaturedPosts />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
