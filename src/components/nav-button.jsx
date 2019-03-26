import React from "react"
import PropTypes from "prop-types"


const NavButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <svg
        width="29"
        height="12"
        viewBox="0 0 29 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="29" height="2" rx="1" fill="white" />
        <rect x="12" y="5" width="17" height="2" rx="1" fill="white" />
        <rect x="19" y="10" width="10" height="2" rx="1" fill="white" />
      </svg>
    </div>
  )
}

NavButton.propTypes = {
  onClick: PropTypes.func,
}

NavButton.defaultProps = {
  onClick: () => {
    console.log("Error: Not Implemented")
  },
}

export default NavButton
