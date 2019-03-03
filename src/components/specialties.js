import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v1"

import Styles from "../styles/components/specialties.module.scss"

const Specialties = ({ componentId }) => (
  <section className={Styles.specialties} aria-label="Who am I in a nutshell?">
    <div className={Styles.specialties__container}>
      <p>
        <strong>I'm a designer</strong> from France <span aria-hidden>🇫🇷</span>{" "}
        spending my days between Amsterdam and Rotterdam in The Netherlands{" "}
        <span aria-hidden>🇳🇱</span>.
      </p>
      <p>
        I&nbsp;am working for{" "}
        <a
          href="https://castoredc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Castor EDC
        </a>{" "}
        where I <strong>develop the design system</strong> and{" "}
        <strong>help making the platform more accessible</strong> with a lot of
        guidelines, training and mentoring.
      </p>
      <p>
        My professional background includes{" "}
        <strong>several years as a web developer</strong>. This is allowing me
        to be a{" "}
        <strong>strong bridge between Product and Engineering teams</strong>.
      </p>
    </div>
  </section>
)

Specialties.propTypes = {
  componentId: PropTypes.string,
}

Specialties.defaultProps = {
  componentId: uuid(),
}

export default Specialties
