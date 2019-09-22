import PropTypes from 'prop-types';
import React from 'react';
import Styles from './header.module.scss';
import Navigation from '../navigation';
import raccoonLogo from '../../images/raccoon-logo-inverted.svg';

const Header = ({ siteTitle, mainNavigation }) => (
  <header className={Styles.header}>
    <div className={Styles.header__container}>
      <div className={Styles.header__logo}>
        <img src={raccoonLogo} alt={siteTitle} />
      </div>
      <Navigation mainNavigation={mainNavigation} />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  mainNavigation: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  mainNavigation: null,
};

export default Header;
