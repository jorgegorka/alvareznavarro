import React from 'react';

import MetaFacebook from './meta-facebook';
import MetaTwitter from './meta-twitter';
import MetaStandard from './meta-standard';

export default ({ post, siteTitle }) => {
  return (
    <span>
      <MetaStandard post={ post } siteTitle={ siteTitle } />
      <MetaFacebook post={ post } siteTitle={ siteTitle } />
      <MetaTwitter post={ post } siteTitle={ siteTitle } />
    </span>
  )
}
