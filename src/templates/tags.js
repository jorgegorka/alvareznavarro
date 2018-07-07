import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from "prop-types"

import SiteNavigation from '../components/site-navigation'
import PostExcerpt from '../components/post-excerpt'
import PageNavigation from '../components/page-navigation'

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post`;

  return (
    <div>
      <header className="site-header outer no-cover">
        <Helmet>
          <body className="tag-template" />
        </Helmet>
        <div className="inner">
          <SiteNavigation />
          <div className="site-header-content">
            <h1 className="site-title">{tag}</h1>
            <h2 className="site-description">{tagHeader}</h2>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main outer" role="main">
        <div className="inner">
          <div className="post-feed">
            { edges.map(({ node }, index) => (
              <PostExcerpt post={ node } key={ index } />
            )) }
          </div>
          <PageNavigation pathContext={ pathContext } />
        </div>
      </main>
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              tags: PropTypes.array.isRequired,
              excerpt: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              category: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            tags
            excerpt
            date(formatString: "DD-MM-YYYY")
            category
          }
        }
      }
    }
  }
`;
