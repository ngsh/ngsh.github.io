import React from 'react'
import { Link } from 'gatsby'
import styles from './indexcontent.module.css' 

export default (data) => (
  <div className={styles.index_post}>
    {data.allMarkdownRemark.edges.map(({node}, index) => (
      <div key={node.id}>
        <Link to={node.fields.slug} className={styles.link} >
          <h4>
            #{index+1} {" "} {node.frontmatter.title} {" "}
            <span className={styles.post_date}>
              - {node.frontmatter.date}
            </span>
          </h4>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </div>
)
