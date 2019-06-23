import React from 'react'
import { graphql } from 'gatsby'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map((category, index) => (
          <li key={index}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default CategoriesPage

export const categoriesPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
