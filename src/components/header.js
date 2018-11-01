import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const LinkList = ({to, children}) => (
  <li className={styles.header_nav_litem}>
    <Link to={to} className={styles.header_link}>
      <h3>{children}</h3>
    </Link>
  </li>
)

export default () => (
  <div className={styles.header}>
    <Link to='/' className={styles.header_link}>
      <h1 className={styles.header_title}>NGSH I/O</h1>
    </Link>
    <ul className={styles.header_nav_list}>
      <LinkList to='/playground'>PlayGround</LinkList>
    </ul>
  </div>
)
