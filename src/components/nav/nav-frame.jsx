import React, { useState } from "react"
import PropTypes from "prop-types"

import NavButton from "./nav-button"
import NavLogo from "./nav-logo"
import NavIndicator from "./nav-indicator"
import NavGitButton from "./nav-git-button"
import NavMenu from "./nav-menu"

import styles from "../../styles/nav-frame.module.scss"

const NavFrame = ({ isMobile }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  if (isMobile) {
    return (
      <>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <NavLogo />
          </div>
          <div className={styles.navButton}>
            <NavButton onClick={() => setMenuVisible(!(menuVisible))} />
          </div>
          <div className={styles.navIndicator}>
            <NavIndicator />
          </div>
          <div className={styles.navGitButton}>
            <NavGitButton />
          </div>
        </div>
        <NavMenu isVisible={menuVisible} />
      </>
    )
  }
  return <div>nav</div>
}
NavFrame.propTypes = {
  isMobile: PropTypes.bool,
}

NavFrame.defaultProps = {
  isMobile: false,
}
export default NavFrame
