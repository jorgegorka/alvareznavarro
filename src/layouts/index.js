import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/footer'
import './index.css'

const Layout = ({ children }) => (
  <div className="site-wrapper">
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
