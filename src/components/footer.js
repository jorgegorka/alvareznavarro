import React from 'react'

const Footer = ({ _siteTitle }) => (
  <footer className="site-footer outer">
    <div className="site-footer-content inner">
      <section className="copyright" style={{ lineHeight: '1.3em' }}>
        <a href="/">Jorge Alvarez</a>
      </section>
      <nav className="site-footer-nav">
        <a
          href="https://www.happymoodscore.com/"
          target="_blank"
          title="The easiest way to get feedback"
        >
          Happy Mood Score
        </a>
        <a
          href="https://www.resourceguruapp.com/"
          target="_blank"
          title="Scheduling software and resource management"
        >
          Resource Guru
        </a>
      </nav>
    </div>
  </footer>
)

export default Footer
