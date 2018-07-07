import React from 'react'
import Helmet from 'react-helmet'

export default ({ post, siteTitle }) => {
  return (
    <Helmet>
      <title>{ post.frontmatter.title } | { siteTitle }</title>
      <meta name="description" content={ post.frontmatter.excerpt } />
      <meta name="author" content={ siteTitle } />
      <link rel="canonical" href={ post.frontmatter.slug } />
    </Helmet>
  )
}
