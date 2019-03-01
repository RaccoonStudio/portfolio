import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../styles/header.module.scss"
import raccoonLogo from "../images/raccoon-logo-inverted.svg"

const Header = ({ siteTitle }) => (
  <header className={Styles.header}>
    <div className={Styles.header__container}>
      <div className={Styles.header__logo}>
        <img src={raccoonLogo} alt={siteTitle} />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
