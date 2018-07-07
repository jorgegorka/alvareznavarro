import React from 'react';
import Helmet from 'react-helmet';

import MetaFacebook from './meta-facebook';
import MetaTwitter from './meta-twitter';
import MetaStandard from './meta-standard';

export default ({ post, siteTitle }) => {
  return (
    <span>
      <Helmet>
        <body className="post-template" />
      </Helmet>
      <MetaStandard post={ post } siteTitle={ siteTitle } />
      <MetaFacebook post={ post } siteTitle={ siteTitle } />
      <MetaTwitter post={ post } siteTitle={ siteTitle } />
    </span>
  )
}
