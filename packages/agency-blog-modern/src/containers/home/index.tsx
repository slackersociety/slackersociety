import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Banner from './banner';

type PersonalBlogProps = {};

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Banner />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
