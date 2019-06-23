import React from 'react'
import Link from 'gatsby-link'

import PostImage from './post-image'
import PostTags from './post-tags'

const PostExcerpt = ({ post }) => (
  <article className="post-card post">
    <Link to={post.frontmatter.slug} className="post-card-image-link">
      <PostImage isCard image={post.frontmatter.headerImage} />
    </Link>

    <div className="post-card-content">
      <Link to={post.frontmatter.slug} className="post-card-content-link">
        <header className="post-card-header">
          <span className="post-card-tags">{post.frontmatter.category}</span>
          <h2 className="post-card-title">{post.frontmatter.title}</h2>
        </header>
        <section className="post-card-excerpt">
          {post.frontmatter.excerpt}
        </section>
      </Link>
      <footer className="post-card-meta">
        <span className="post-card-author">{post.frontmatter.date}</span>
        <PostTags tags={post.frontmatter.tags} />
      </footer>
    </div>
  </article>
)

export default PostExcerpt
