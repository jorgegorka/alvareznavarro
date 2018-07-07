import React from 'react'

import PostImage from '../components/post-image'
import PostTags from '../components/post-tags'
import PostHeader from '../components/post-header';
import SiteNavigation from '../components/site-navigation';

export default ({ data }) => {
  if (!data || !data.markdownRemark) {
    return null;
  }
  const post = data.markdownRemark;
  const { site } = data;
  return (
    <div>
      <header className="site-header outer">
        <PostHeader post={ post } siteTitle={ site.siteMetadata.title } />
        <div className="inner">
          <SiteNavigation />
        </div>
      </header>
      <main id="site-main" className="site-main outer">
        <div className="inner">
          <article className="post-full post">
            <header className="post-full-header">
              <section className="post-full-meta">
                <time className="post-full-meta-date" dateTime="post.frontmatter.date">{ post.frontmatter.date }</time>
                  <span className="date-divider">/</span> <PostTags tags={ post.frontmatter.tags } />
              </section>
              <h1 className="post-full-title">{ post.frontmatter.title }</h1>
            </header>
            <PostImage image={ post.frontmatter.headerImage } />
            <section className="post-full-content">
              <div className="kg-card-markdown" dangerouslySetInnerHTML={ { __html: post.html } } />
            </section>
          </article>
        </div>
      </main>
    </div>
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
        date(formatString: "DD MMMM YYYY")
        tags
        category
        draft
        excerpt
        slug
      }
    }
  }
`;
