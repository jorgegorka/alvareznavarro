import React from 'react'
import Link from 'gatsby-link'

const NavLink = props => {
  if (!props.test) {
    return (
      <Link to={`/${props.url}`} className={props.className}>
        <span className="hide">{props.text}</span>
      </Link>
    )
  } else {
    return null
  }
}

const PageNavigation = ({ pageContext }) => {
  const { index, first, last } = pageContext
  console.log(first)

  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <nav className="pagination" role="navigation">
      <div className="previousLink">
        <NavLink
          test={first}
          url={previousUrl}
          text="Go to Previous Page"
          className="newer-posts"
        />
      </div>
      <div className="nextLink">
        <NavLink
          test={last}
          url={nextUrl}
          text="Go to Next Page"
          className="older-posts"
        />
      </div>
    </nav>
  )
}

export default PageNavigation
