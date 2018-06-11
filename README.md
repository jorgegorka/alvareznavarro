# Alvareznavarro.es

Future home of alvareznavarro.es

This website has been generated using the amazing Gatsbyjs

### plugins

npm install --save gatsby-plugin-typography typography-theme-fairy-gates

  src/utils/typography.js

    import Typography from "typography";
    import fairyGateTheme from "typography-theme-fairy-gates";

    const typography = new Typography(fairyGateTheme);
    export default typography;


    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },

npm install --save gatsby-source-filesystem

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

npm install --save gatsby-transformer-remark


    'gatsby-transformer-remark',

Create slug for pages in markdown files

    const { createFilePath } = require(`gatsby-source-filesystem`);

    exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
      const { createNodeField } = boundActionCreators
      if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
      }
    };
