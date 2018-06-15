import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'

class PostTags extends React.Component {

  showTags() {
    return this.props.tags.map((tag, index) => (
      <Link key={index} to={`/tags/${kebabCase(tag)}/`} className="tag-list">
        {tag}
      </Link>
    ))
  }

  render() {
    return (
      <span>
        { this.showTags() }
      </span>
    )
  }
}

export default PostTags
