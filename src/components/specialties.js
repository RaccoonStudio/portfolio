import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Styles from "../styles/components/specialties.module.scss"
import uuid from "uuid/v1"

const Specialties = ({ componentId }) => (
  <section
    className={Styles.specialties}
    aria-labelledby={componentId + "_title"}
  >
    <h2 className={Styles.specialties__title} id={componentId + "_title"}>
      In a nutshell
    </h2>
    <ul className={Styles.specialties__list}>
      <li className={Styles.specialties__item}>
        <Link to="/projects">
          I craft high-quality inclusive online interfaces
        </Link>{" "}
        with accessibility in mind.
      </li>
      <li className={Styles.specialties__item}>
        <Link to="/workshops">I teach and mentor designers and developers</Link>{" "}
        to collaborate more efficiently.
      </li>
      <li className={Styles.specialties__item}>
        <Link to="/talks">I speak to conferences</Link> and{" "}
        <Link to="/blog">write articles</Link> about design systems and
        accessibility.
      </li>
    </ul>
  </section>
)

Specialties.propTypes = {
  componentId: PropTypes.string,
}

Specialties.defaultProps = {
  componentId: uuid(),
}

export default Specialties
