import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const PostTemplate = ({ data }) => <MDXRenderer>{data.mdx.body}</MDXRenderer>

export const POST_QUERY = graphql`
  query POST_QUERY($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`

export default PostTemplate
