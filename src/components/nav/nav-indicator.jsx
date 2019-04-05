import React from "react"
import PropTypes from "prop-types"

const NavIndicator = ({ index }) => {
  return (
    <svg
      width="243"
      height="14"
      viewBox="0 0 243 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.3296 7C57.3296 9.36749 55.2729 11.5 52.4659 11.5C49.659 11.5 47.6023 9.36749 47.6023 7C47.6023 4.63251 49.659 2.5 52.4659 2.5C55.2729 2.5 57.3296 4.63251 57.3296 7Z"
        fill={(index === 0) ? 'white' : 'none'}
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M103.352 7C103.352 9.36749 101.296 11.5 98.4886 11.5C95.6817 11.5 93.625 9.36749 93.625 7C93.625 4.63251 95.6817 2.5 98.4886 2.5C101.296 2.5 103.352 4.63251 103.352 7Z"
        fill={(index === 1) ? 'white' : 'none'}
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M149.375 7C149.375 9.36749 147.318 11.5 144.511 11.5C141.704 11.5 139.648 9.36749 139.648 7C139.648 4.63251 141.704 2.5 144.511 2.5C147.318 2.5 149.375 4.63251 149.375 7Z"
        fill={(index === 2) ? 'white' : 'none'}
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M195.398 7C195.398 9.36749 193.341 11.5 190.534 11.5C187.727 11.5 185.67 9.36749 185.67 7C185.67 4.63251 187.727 2.5 190.534 2.5C193.341 2.5 195.398 4.63251 195.398 7Z"
        fill={(index === 3) ? 'white' : 'none'}
        stroke="white"
        strokeWidth="4"
      />
      
    </svg>
  )
}

NavIndicator.propTypes = {
  index: PropTypes.number,
}

NavIndicator.defaultProps = {
  index: 0,
}

export default NavIndicator
