import React from "react"
import PropTypes from "prop-types"
import Styles from "../styles/components/hero.module.scss"
import uuid from "uuid/v1"

const Hero = ({ salutations, componentId }) => (
  <section className={Styles.hero} aria-labelledby={componentId + "_title"}>
    <div className={Styles.hero__container}>
      <h1 className={Styles.hero__title}>
        <span className={Styles.hero__salutations}>
          {salutations.map(item => (
            <span lang={item.lang}>{item.content}</span>
          ))}
        </span>
        <span id={componentId + "_title"}>
          I am <strong>Damien</strong>, digital <strong>designer</strong> and{" "}
          <strong>accessibility advocate</strong>.
        </span>
      </h1>
    </div>
  </section>
)

Hero.propTypes = {
  salutations: PropTypes.array,
  componentId: PropTypes.string,
}

Hero.defaultProps = {
  salutations: null,
  componentId: uuid(),
}

export default Hero
