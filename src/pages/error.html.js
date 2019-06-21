import React from 'react'
import Link from 'gatsby-link'

const ErrorPage = () => (
  <div>
    <h1>Something went wrong</h1>
    <p>There has been a error generating the page.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ErrorPage
