import React from 'react'
import Link from 'gatsby-link'

const ReadMoreLink = ({ post }) => (
  <li>
    <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
  </li>
)

export default ReadMoreLink
