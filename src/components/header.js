import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../styles/components/header.module.scss"
import raccoonLogo from "../images/raccoon-logo-inverted.svg"

const Header = ({ siteTitle, mainNavigation }) => (
  <header className={Styles.header}>
    <div className={Styles.header__container}>
      <div className={Styles.header__logo}>
        <img src={raccoonLogo} alt={siteTitle} />
      </div>
      <nav className={Styles.header__navigation} aria-label="Main navigation">
        {mainNavigation.map(item => <Link to={item.link}>{item.label}</Link>)}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  mainNavigation: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  mainNavigation: null,
}

export default Header
