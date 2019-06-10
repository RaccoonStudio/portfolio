/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import SkipLinks from "../skip-links"
import { ContainerSystem } from "../core"

import "../icons"
import "./layout.module.scss"

const StyledMain = styled.main`
  ${props => props.narrowContainer && ContainerSystem.narrow}
`

const Layout = ({ children, mainClass, narrowContent }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            mainNavigation {
              label
              link
            }
            footerNetworks {
              icon
              label
              target
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SkipLinks />
        <Header
          siteTitle={data.site.siteMetadata.title}
          mainNavigation={data.site.siteMetadata.mainNavigation}
        />
        <StyledMain
          id="main"
          className={mainClass || undefined}
          narrowContainer={narrowContent}
        >
          {children}
        </StyledMain>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          networks={data.site.siteMetadata.footerNetworks}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  narrowContent: PropTypes.bool,

  /**
   * Specify the main class to add on main markup
   */
  mainClass: PropTypes.string,
}

Layout.defaultProps = {
  narrowContent: false,
}

export default Layout
