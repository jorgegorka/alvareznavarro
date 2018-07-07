import React from 'react'
import Helmet from 'react-helmet'

export default ({ post, siteTitle }) => {
  return(
    <Helmet>
      <meta property="og:site_name" content={ siteTitle } />
      <meta property="og:title" content={ post.frontmatter.title } />
      <meta property="og:url" content={ post.frontmatter.slug } />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={ post.frontmatter.excerpt } />
      <meta property="article:published_time" content={ post.frontmatter.date } />
      <meta property="article:tag" content={ post.frontmatter.tags } />
      <meta property="og:image" content={ post.frontmatter.headerImage } />
    </Helmet>
  )
}
