import React from "react"
import PropTypes from "prop-types"
import Styles from "./hero.module.scss"
import Img from "gatsby-image"
import uuid from "uuid/v1"

const Hero = ({ salutations, heroImage, componentId }) => (
  <>
    <section className={Styles.hero}>
      <div className={Styles.hero__container}>
        <h1 className={Styles.hero__title}>
          <span className={Styles.hero__salutations}>
            {salutations.map((item, index) => (
              <span lang={item.lang} key={index}>
                {item.content}
              </span>
            ))}
          </span>
          <span id={`${componentId}_title`}>
            I am <strong>Damien</strong>, digital <strong>designer</strong>{" "}
            specialised in <strong>accessibility</strong>.
          </span>
        </h1>
      </div>
    </section>
    <div className={Styles.heroImage}>
      <Img
        fixed={heroImage.childImageSharp.fixed}
        alt="Face portrait of Damien Senger looking directly at the camera. The person is smiling at the camera while wearing an overall outfit. They is also having blue hair and several piercings."
      />
    </div>
  </>
)

Hero.propTypes = {
  salutations: PropTypes.array,
  heroImage: PropTypes.object,
  componentId: PropTypes.string,
}

Hero.defaultProps = {
  salutations: null,
  heroImage: null,
  componentId: uuid(),
}

export default Hero
