import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <div className="site-wrapper">
    <Helmet>
      <meta name="generator" content="gatsby" />
    </Helmet>
    {children}
    <Footer />
  </div>
)

export default Layout
