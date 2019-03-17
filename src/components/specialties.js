import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid/v1"

import Styles from "../styles/components/specialties.module.scss"

const Specialties = ({ content, componentId }) => (
  <section className={Styles.specialties} id={componentId}>
    <h2 className={Styles.specialties__title}>How may I help you?</h2>
    <ul className={Styles.specialties__list}>
      {content.map((item, index) => (
        <li key={index}>
          <h3 className={Styles.specialties__subtitle}>{item.title}</h3>
          <p className={Styles.specialties__abstract}>{item.content}</p>
          <Link className={Styles.specialties__link} to={item.link.target}>
            {item.link.label}
            <svg height="20" width="20" viewBox="0 0 20 20">
              <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

Specialties.propTypes = {
  content: PropTypes.array,
  componentId: PropTypes.string,
}

Specialties.defaultProps = {
  content: null,
  componentId: uuid(),
}

export default Specialties
