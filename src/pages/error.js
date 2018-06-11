import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Something went wrong</h1>
    <p>If something is wrong Amazon will show this page to the users.</p>
    <p>Tell them something nice and send them to the homepage</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default IndexPage
