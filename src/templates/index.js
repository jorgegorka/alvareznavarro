import React from "react";
import Helmet from 'react-helmet';

import PostExcerpt from '../components/post-excerpt';
import PageNavigation from '../components/page-navigation';

export default ({ pathContext }) => (
  <div>
    <Helmet>
      <body className="home-template" />
    </Helmet>
    <div className="post-feed">
      { pathContext.group.map(({ node }, index) => (
        <PostExcerpt post={ node } key={ index } />
      )) }
    </div>
    <PageNavigation pathContext={ pathContext } />
  </div>
);
