import React from 'react'
import Helmet from 'react-helmet'

export default ({ post, siteTitle }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ post.frontmatter.headerImage } />
      <meta name="twitter:title" content={ post.frontmatter.title } />
      <meta name="twitter:description" content={ post.frontmatter.excerpt } />
      <meta name="twitter:url" content={ post.frontmatter.slug } />
      <meta name="twitter:site" content={ siteTitle } />
    </Helmet>
  )
}
