import React from 'react'
import styles from './blogcontent.module.css'

export default ( post ) => (
  <div className={styles.blog_post}>
    <h1>{post.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
  </div>
)
