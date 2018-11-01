import React from "react"
import Header from '../components/header'
import IndexContent from '../components/indexcontent'
import { graphql } from 'gatsby'

export default ({data}) => {
  return (
    <div>
      <Header />
      <IndexContent {...data} />
    </div>
  )
}

export const query = graphql`
{
	allMarkdownRemark {
	  edges {
	    node {
	      frontmatter {
	        title
	        date
	      }
        excerpt
        id
        fields {
          slug
        }
	    }
	  }
	}
}
`
