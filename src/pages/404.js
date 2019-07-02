import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>Page not found</h1>
    <p>
      I've searched everywhere but I couldn't find the page you are looking for.
    </p>
    <Link to="/">Go back to the homepage.</Link>
  </div>
)

export default NotFoundPage
