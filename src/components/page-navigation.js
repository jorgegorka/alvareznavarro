import React from 'react';
import Link from 'gatsby-link';

const PageNavigation = ({ pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  console.log(first);

  const previousUrl = index - 1 == 1 ? "/" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <nav className="pagination" role="navigation">
      { !first &&
        <div className="previousLink">
          <Link className="newer-posts" to={previousUrl}>&larr; <span className="hide">Previous Posts</span></Link>
        </div>
      }
      { !last &&
        <div className="nextLink">
          <Link className="older-posts" to={nextUrl}><span className="hide">Next Posts</span> &rarr;</Link>
        </div>
      }
    </nav>
  )
}

export default PageNavigation;
