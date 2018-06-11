import React from "react";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`;
