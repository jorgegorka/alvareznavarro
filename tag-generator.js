const generateTags = (posts, createPage) => {
  const tagTemplate = path.resolve('src/templates/tags.js')

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    console.log(tag)

    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
