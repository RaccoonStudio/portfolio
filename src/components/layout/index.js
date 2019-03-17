/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// eslint-disable-next-line
import Icons from "../icons"

import Header from "../header"
import Footer from "../footer"
import SkipLinks from "../skip-links"

// eslint-disable-next-line
import Styles from "./layout.module.scss"

const Layout = ({ children }) => (
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
        <main id="main">{children}</main>
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
}

export default Layout
