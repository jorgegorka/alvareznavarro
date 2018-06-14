const generateCategories = (categories, createPage) => {
  const categoryTemplate = path.resolve('src/templates/category-list.js')

  let categories = []
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.category')) {
      categories = categories.push(edge.node.frontmatter.category)
    }
  })

  categories = _.uniq(categories)

  categories.forEach(category => {
    console.log(category)
    createPage({
      path: `/category/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}

export default generateCategories;
