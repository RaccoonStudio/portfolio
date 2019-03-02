import React from "react"
import PropTypes from "prop-types"
import Styles from "../styles/components/hero.module.scss"

const Hero = ({ salutations }) => (
  <section className={Styles.hero}>
    <div className={Styles.hero__container}>
      <h1 className={Styles.hero__title}>
        <span className={Styles.hero__salutations}>
          {salutations.map(item => (
            <span lang={item.lang}>{item.content}</span>
          ))}
        </span>
        I am <strong>Damien</strong>, digital <strong>designer</strong> and{" "}
        <strong>accessibility advocate</strong>.
      </h1>
    </div>
  </section>
)

Hero.propTypes = {
  salutations: PropTypes.array,
}

Hero.defaultProps = {
  salutations: null,
}

export default Hero
