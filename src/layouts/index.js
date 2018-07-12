import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import './index.css'

const Layout = ({ children }) => (
  <div className="site-wrapper">
    <Helmet>
      <meta name="generator" content="gatsby" />
    </Helmet>
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
