import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import PostExcerpt from '../components/post-excerpt';
import SiteNavigation from '../components/site-navigation';
import MobileNavigation from '../components/mobile-navigation';

const CategoryList = ({ pathContext, data }) => {
  const { category } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryTotal = `${totalCount} post${totalCount === 1 ? '' : 's'} for category.`

  return (
    <div>
      <header className="site-header outer no-cover">
        <Helmet>
          <body className="tag-template" />
        </Helmet>
        <div className="inner">
          <MobileNavigation />
          <SiteNavigation />
          <div className="site-header-content">
            <h1 className="site-title">{category}</h1>
            <h2 className="site-description">{categoryTotal}</h2>
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
        </div>
      </main>
    </div>
  );
};

CategoryList.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default CategoryList;

export const categoriesListQuery = graphql`
  query CategoriesListPage($category: String) {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            category
            title
            slug
            tags
            date(formatString: "DD-MM-YYYY")
            excerpt
          }
        }
      }
    }
  }
`
