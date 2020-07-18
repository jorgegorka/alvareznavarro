import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import PostExcerpt from '../components/post-excerpt'
import PageNavigation from '../components/page-navigation'

export default ({ pageContext, data }) => (
  <Layout>
    <Helmet>
      <title>Jorge Alvarez | Web developer & SaaS barista</title>
      <meta name="author" content={data.site.siteMetadata.title} />
      <meta
        name="description"
        content="I am Jorge Alvarez a web developer with a strong focus on the business aspects of applications. I've been working on SaaS applications for the last 19 years."
      />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main id="site-main" className="site-main outer" role="main">
      <div className="inner">
        <Helmet>
          <body className="home-template" />
        </Helmet>
        <div className="post-feed">
          {pageContext.group.map(({ node }, index) => (
            <PostExcerpt post={node} key={index} />
          ))}
        </div>
        <PageNavigation pageContext={pageContext} />
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
