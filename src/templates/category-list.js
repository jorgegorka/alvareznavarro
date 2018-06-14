import React from "react";
import PropTypes from 'prop-types'

// Components
import Link from "gatsby-link";

const CategoryList = ({ pathContext, data }) => {
  const { category } = pathContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} for category: "${category}"`

  return <div>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { path, title } = node.frontmatter
          return <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
        })}
      </ul>
      <Link to="/categories">All categories</Link>
    </div>
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
              path: PropTypes.string.isRequired,
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
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            category
            title
            slug
            date
            excerpt
          }
        }
      }
    }
  }
`
