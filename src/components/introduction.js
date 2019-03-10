import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v1"

import Styles from "../styles/components/introduction.module.scss"

const Introduction = ({ componentId }) => (
  <section className={Styles.introduction} aria-label="Who am I in a nutshell?">
    <div className={Styles.introduction__container}>
      <p>
        <strong>I'm a designer</strong> from France <span aria-hidden>🇫🇷</span>{" "}
        spending my life between Amsterdam and Rotterdam in The Netherlands{" "}
        <span aria-hidden>🇳🇱</span>.
      </p>
      <p>
        I'm <strong>Design System and Accessibility lead</strong> for{" "}
        <a
          href="https://castoredc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Castor&nbsp;EDC
        </a>{" "}
        where I collaborate with Product and Engineering teams to bring more{" "}
        <strong>consistency</strong>, <strong>usability</strong> and{" "}
        <strong>accessibility</strong> across touchpoints.
      </p>
      <p>
        My professional background includes{" "}
        <strong>several years as a web developer</strong>. This is helping me to
        be a <strong>strong bridge</strong> between ideation and implementation
        and to help and mentor front-end developers to develop inclusivity
        through their code.
      </p>
    </div>
  </section>
)

Introduction.propTypes = {
  componentId: PropTypes.string,
}

Introduction.defaultProps = {
  componentId: uuid(),
}

export default Introduction
