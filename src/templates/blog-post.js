import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import BlogContent from '../components/blogcontent'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <div>
        <Header />
        <BlogContent {...post} />
      </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
