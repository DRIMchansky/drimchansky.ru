import React from 'react'

import Nav from '../Nav/Nav'
import Social from '../Social/Social'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          <span>DRIMchansky</span>
          <small>web-addict</small>
        </p>
        <Nav />
      </div>
      <footer className={styles.footer}>
        <Social />
        footer
      </footer>
    </aside>
  )
}

export default Sidebar
