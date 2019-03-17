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
import Icons from "./icons"

import Header from "./header"
import SkipLinks from "./skip-links"

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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
