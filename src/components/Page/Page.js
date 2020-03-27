import React, { useState, useLayoutEffect } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Hamburger from '../../components/Hamburger/Hamburger'
import Toggl from '../../components/Toggl/Toggl'

import styles from './Page.module.css'
import '../../util/custom-normalize.css'
import '../../util/properties.css'
import '../../util/fonts.css'
import '../../util/utility.css'

const Page = (props) => {
  // hamburger state
  const [active, setActive] = useState(false)

  useLayoutEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  })

  return (
    <>
      <div className={styles.page}>
        <Hamburger active={active} setActive={setActive} />
        <Sidebar active={active} setActive={setActive} />
        <>{props.children}</>
        <Toggl />
      </div>
    </>
  )
}

export default Page
