const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const tagTemplate = path.resolve("src/templates/tags.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};
