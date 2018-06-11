module.exports = {
  siteMetadata: {
    title: 'Jorge Alvarez - Full stack web developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    }
  ],
}
