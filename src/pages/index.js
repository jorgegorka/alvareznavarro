import React from "react";
import Link from "gatsby-link";

import PostExcerpt from "../components/post-excerpt";

export default ({ data }) => {
  return (
    <div>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      { data.allMarkdownRemark.edges.map(({ node }) => (
        <PostExcerpt post={ node } key={ node.id } />
      )) }
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 20,
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
            category
            tags
            excerpt
          }
        }
      }
    }
  }
`
