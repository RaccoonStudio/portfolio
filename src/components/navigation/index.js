import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './navigation.module.scss';
import uuid from 'uuid/v1';

const isExternal = url => {
  return url.match(/^(?:f|ht)tps?:\/\//i);
};

const closeNavigation = button => {
  button.removeAttribute('aria-expanded');
};

const openNavigation = button => {
  button.setAttribute('aria-expanded', true);
  document.getElementById(button.attributes['aria-controls'].value).children[0].focus();
};

const triggerNavigation = e => {
  const button = e.currentTarget;

  // eslint-disable-next-line
  switch (button.hasAttribute("aria-expanded")) {
    case true:
      closeNavigation(button);
      break;

    case false:
      openNavigation(button);
      break;
  }
};

const Navigation = ({ mainNavigation, componentId }) => (
  <>
    <button
      className={Styles.navigation__button}
      aria-haspopup="true"
      aria-controls={componentId + '__navigation'}
      onClick={triggerNavigation}
    >
      Menu
    </button>
    <nav className={Styles.navigation} aria-label="Main navigation" id={componentId + '__navigation'}>
      {mainNavigation.map((item, index) => (
        <React.Fragment key={index}>
          {isExternal(item.link) && (
            <a className={`${componentId}__navItem`} href={item.link} target="_blaink" rel="noopener noreferrer">
              {item.label}
            </a>
          )}
          {!isExternal(item.link) && (
            <Link className={`${componentId}__navItem`} to={item.link} key={index}>
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  </>
);

Navigation.propTypes = {
  mainNavigation: PropTypes.array,
  componentId: PropTypes.string,
};

Navigation.defaultProps = {
  mainNavigation: null,
  componentId: uuid(),
};

export default Navigation;
