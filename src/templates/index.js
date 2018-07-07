import React from "react"
import Helmet from 'react-helmet'

import Header from '../components/header';
import PostExcerpt from '../components/post-excerpt';
import PageNavigation from '../components/page-navigation';

export default ({ pathContext, data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main id="site-main" className="site-main outer" role="main">
      <div className="inner">
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
    </main>
  </div>
);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`