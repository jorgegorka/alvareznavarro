import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer className="site-footer outer">
    <div className="site-footer-content inner">
      <section className="copyright" style={{ lineHeight: '1.3em' }}>
        <a href="/">Jorge Alvarez</a>
      </section>
      <nav className="site-footer-nav">
        <a href="/">Latest Posts</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener">Twitter</a>
        <a href="https://github.com/" target="_blank" rel="noopener">Github</a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
    </div>
  </footer>
)

export default Footer
