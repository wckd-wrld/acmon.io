import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MediaQuery from "react-responsive"

import NavFrame from "./nav/nav-frame"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <MediaQuery query="(max-device-width: 1224px)">
      <NavFrame isMobile />
      <div className="layout-mobile">
        <main>{children}</main>
      </div>
    </MediaQuery>

    <MediaQuery query="(min-device-width: 1224px)">
      <NavFrame />
      <div className="layout-desktop">
        <main>{children}</main>
      </div>
    </MediaQuery>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
