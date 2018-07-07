import React from 'react';
import Link from 'gatsby-link';

const PageNavigation = ({ pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  console.log(first);

  const previousUrl = index - 1 == 1 ? "/" : `/${(index - 1).toString()}`;
  const nextUrl = (index + 1).toString();

  return (
    <nav className="pagination" role="navigation">
      { !first &&
        <div className="previousLink">
          <a className="newer-posts" href={previousUrl}>&larr; <span className="hide">Previous Posts</span></a>
        </div>
      }
      { !last &&
        <div className="nextLink">
          <a className="older-posts" href={nextUrl}><span className="hide">Next Posts</span> &rarr;</a>
        </div>
      }
    </nav>
  )
}

export default PageNavigation;
