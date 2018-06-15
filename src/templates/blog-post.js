import React from 'react'
import Link from 'gatsby-link'

import PostHeaderImage from '../components/post-header-image'
import PostTags from '../components/post-tags'
import PostHeader from '../components/post-header';

export default ({ data }) => {
  if (!data || !data.markdownRemark) {
    return null;
  }
  const post = data.markdownRemark;
  const { site } = data;
  return (
    <article className="post-card post">
      <PostHeader post={ post } siteTitle={ site.siteMetadata.title } />
      <Link to={ post.frontmatter.slug } className="post-card-image-link">
        <PostHeaderImage image={ post.frontmatter.headerImage } />
      </Link>


      <div className="post-card-content">
        <Link to={ post.frontmatter.slug } className="post-card-content-link">
          <header className="post-card-header">
            <span className="post-card-tags">
              { post.frontmatter.category }
            </span>
            <h2 className="post-card-title">{ post.frontmatter.title }</h2>
          </header>
          <section className="post-card-excerpt">
            <div dangerouslySetInnerHTML={ { __html: post.html } } />
          </section>
        </Link>
        <footer className="post-card-meta">
          <span className="post-card-author">
            { post.frontmatter.date }
          </span>
          <PostTags tags={ post.frontmatter.tags } />
        </footer>
      </div>
    </article>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { draft: { eq: false }, slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        category
        draft
        excerpt
        slug
      }
    }
  }
`;
