import React, { useEffect } from "react"
import anime from "animejs"

import styles from "../../styles/nav-menu.module.scss"

const NavMenu = ({ transitionState }) => {

  useEffect(() => { 
    anime({
      targets: (`.${  styles.menuContainer}`),
      duration: 300,
      easing: 'spring',
      opacity: () => {
        if (transitionState === 'entering') {
          return 1.1
        }
        if (transitionState === 'exiting') {
          return 0
        }
      }
      
    })

    anime({ 
      targets: '#list-item',
      duration: 200,
      easing: 'spring',
      delay: anime.stagger(100),
      opacity: () => {
        if (transitionState === 'entering') {
          return [0,1]
        }
        if (transitionState === 'exiting') {
          return [1,0]
        }
      },
      translateX: () => {
        if (transitionState === 'entering') {
          return ['-10%', '0%']
        }
        if (transitionState === 'exiting') {
          return ['0%', '-10%']
        }
      }
    })
  })
  


  return (
        <>
        <div className={styles.menuContainer}>
          <div className={styles.vertBar}>
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
          </div>
          <div id='list-item' className={styles.item1}>workflow</div>
          <div id='list-item' className={styles.item2}>design</div>
          <div id='list-item' className={styles.item3}>code</div>
          <div id='list-item' className={styles.item4}>contact</div>
        </div>
        </>
  )
}

export default NavMenu
