import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Styles from './introduction.module.scss';

const Introduction = ({ componentId }) => (
  <section className={Styles.introduction} aria-label="Who am I in a nutshell?" id={componentId}>
    <div className={Styles.introduction__container}>
      <p>
        <strong>I&apos;m a designer who codes</strong> living and working in Rotterdam{' '}
        <span aria-label="The Netherlands">🇳🇱&nbsp;</span>. Originally from Strasbourg{' '}
        <span aria-label="France">🇫🇷</span>, I enjoyed working with brands, conferences and projects on both side of the
        Atlantic Ocean.
      </p>
      <p>
        As <strong>Design systems and Accessibility lead</strong> for{' '}
        <a href="https://castoredc.com" target="_blank" rel="noopener noreferrer">
          Castor
        </a>{' '}
        in Amsterdam, I collaborate daily with Product and Engineering teams to build a design system and its team
        bringing more <strong>consistency</strong>, <strong>usability</strong> and <strong>accessibility</strong> in our
        products.
      </p>
      <p>
        In the last <strong>10 years</strong>, I helped projects and teams in France, Germany, The Netherlands, Sweden
        and in the United States to <strong>be more accessible</strong> and/or to{' '}
        <strong>develop their design systems</strong>. With experiences both in design and front-end engineering, I am a{' '}
        <strong>strong bridge between ideation and implementation</strong>.
      </p>
    </div>
  </section>
);

Introduction.propTypes = {
  componentId: PropTypes.string,
};

Introduction.defaultProps = {
  componentId: uuid(),
};

export default Introduction;
