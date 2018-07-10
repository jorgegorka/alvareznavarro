import React from 'react'

import BlogCover from './images/blog-cover.jpg'
import ReadMoreLink from './read-more-link'
import PostExcerpt from './post-excerpt'

const ReadMore = ({ posts }) => (
  <aside className="read-next outer">
    <div className="inner">
      <div className="read-next-feed">
        <article className="read-next-card" style={{ backgroundImage: `url(${BlogCover})` }}>
          <header className="read-next-card-header">
            {/* <small className="read-next-card-header-sitetitle">— Read more —</small> */}
            <h3 className="read-next-card-header-title"><a href="/tag/getting-started/">Latests posts</a></h3>
          </header>
          <div className="read-next-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"></path></svg>
          </div>
          <div className="read-next-card-content">
            <ul>
              { posts.edges.slice(1, 5).map( (post, index) => <ReadMoreLink key={index} post={post} /> ) }

            </ul>
          </div>
        </article>

        <PostExcerpt post={posts.edges[0].node} />
      </div>
    </div>
  </aside>
)

export default ReadMore
