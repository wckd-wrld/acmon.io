import React, { useState, useEffect } from "react"
import posed from 'react-pose'

import styles from "../../styles/nav-menu.module.scss"


const AnimatedParent = posed.div({
  hidden: { 
    opacity: 0
   },
  visible: { 
    opacity: 1,
    delayChildren: 400,
    staggerChildren: 50
  }
})

const AnimatedChild = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

const AnimatedVertBar = posed.div({
  hidden: { 
    scaleY: 0,
    opacity: 0,           
  },
  visible: { 
    scaleY: 1,
    opacity: 1 
  }
})


const NavMenu = ({ isVisible }) => {

  return (
    <>
      <AnimatedParent className={styles.menuContainer} pose={isVisible ? 'visible' : 'hidden'}>
        <AnimatedVertBar className={styles.vertBar}>
          <svg
            width="3"
            height="274"
            viewBox="0 0 3 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="273.257"
              width="273.257"
              height="2"
              rx="1"
              transform="rotate(-89.915 0 273.257)"
              fill="white"
            />
          </svg>
        </AnimatedVertBar>
        <AnimatedChild className={styles.item1}>workflow</AnimatedChild>
        <AnimatedChild className={styles.item2}>design</AnimatedChild>
        <AnimatedChild className={styles.item3}>code</AnimatedChild>
        <AnimatedChild className={styles.item4}>contact</AnimatedChild>
      </AnimatedParent>
    </>
  )
}

export default NavMenu
