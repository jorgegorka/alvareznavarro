import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="site-wrapper">
    <Header siteTitle={data.site.siteMetadata.title} />

    <main id="site-main" className="site-main outer" role="main">
      <div className="inner">
        {children()}
      </div>
    </main>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
