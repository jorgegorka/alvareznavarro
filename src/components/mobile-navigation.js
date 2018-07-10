import React from 'react'
import Link from 'gatsby-link'

const MobileNavigation = () => (
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu" role="navigation">
      <Link to="/"><li>Home</li></Link>
      <Link to="/categories/web-development"><li>Web development</li></Link>
      <Link to="/categories/business"><li>Business</li></Link>
      <Link to="/categories/other"><li>Other</li></Link>
      <Link to="/about-me"><li>About me</li></Link>
    </ul>
  </div>
)

export default MobileNavigation
