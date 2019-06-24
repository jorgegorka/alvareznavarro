const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')
// const generateTags = require('./tag-generator')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { eq: false } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              tags
              category
              date(formatString: "DD MMMM, YYYY")
              excerpt
              headerImage
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    createPaginatedPages({
      edges: posts,
      createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 15, // This is optional and defaults to 10 if not used
      pathPrefix: '/', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })

    generateTags(posts, createPage)
    generateCategories(posts, createPage)
  })
}

const generateTags = (posts, createPage) => {
  const tagTemplate = path.resolve('src/templates/tags.js')

  // Tag pages:
  let tags = new Set([])
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      edge.node.frontmatter.tags.forEach(tag => {
        tags.add(tag)
      })
    }
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}

const generateCategories = (posts, createPage) => {
  const categoryTemplate = path.resolve('src/templates/category-list.js')

  let categories = new Set([])
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.category')) {
      categories.add(edge.node.frontmatter.category)
    }
  })

  categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
