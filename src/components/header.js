import React from 'react'

import SiteNavigation from './site-navigation'
import MobileNavigation from './mobile-navigation'
import siteHeader from './images/family.jpg'


const Header = ({ siteTitle }) => (
  <header className="site-header outer " style={{ backgroundImage: `url(${siteHeader})` }}>
    <MobileNavigation />
    <div className="inner">
      <div className="site-header-content">
        <h1 className="site-title">{siteTitle}</h1>
        <h2 className="site-description">Description</h2>
      </div>
      <SiteNavigation />
    </div>
  </header>
)

export default Header
