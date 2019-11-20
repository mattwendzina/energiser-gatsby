import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <li>
      <PostLink key={edge.node.id} post={edge.node} />
    </li>
  ))

  return (
    <Layout>
      <SEO title="Home" />
      <pre>{`---------------------------------------\n--- School of Code --------------------\n------------------------ energisers ---\n---------------------------------------`}</pre>
      <ul className="energiser-list">{Posts}</ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
