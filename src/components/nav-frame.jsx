import React from "react"
import PropTypes from "prop-types"

import NavButton from "./nav-button"
import NavLogo from "./nav-logo"

import styles from "../styles/nav-frame.module.scss"

const NavFrame = ({ isMobile }) => {
  if (isMobile) {
    return (
      <>
        <div className={styles.mobileFlex}>
          <NavLogo />
          <NavButton />
        </div>
        <div>nav</div>
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
