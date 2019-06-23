import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostExcerpt from '../components/post-excerpt'
import SiteNavigation from '../components/site-navigation'
import MobileNavigation from '../components/mobile-navigation'

const CategoryList = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryTotal = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } for category.`

  return (
    <Layout>
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
            {edges.map(({ node }, index) => (
              <PostExcerpt post={node} key={index} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default CategoryList

export const categoriesListQuery = graphql`
  query CategoriesListPage($category: String) {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { eq: false }, category: { eq: $category } }
      }
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
