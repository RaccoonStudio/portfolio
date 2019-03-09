import React from "react"
import PropTypes from "prop-types"
import Styles from "../styles/components/hero.module.scss"
import Img from "gatsby-image"
import uuid from "uuid/v1"
import { StaticQuery, graphql } from "gatsby"

const Hero = ({ salutations, componentId }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "damiensenger.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 1280, height: 720) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section
          className={Styles.hero}
          // aria-labelledby={componentId + "_title"}
        >
          <div className={Styles.hero__container}>
            <h1 className={Styles.hero__title}>
              <span className={Styles.hero__salutations}>
                {salutations.map(item => (
                  <span lang={item.lang}>{item.content}</span>
                ))}
              </span>
              <span id={componentId + "_title"}>
                I am <strong>Damien</strong>, digital <strong>designer</strong>{" "}
                and <strong>accessibility advocate</strong>.
              </span>
            </h1>
          </div>
        </section>
        <div className={Styles.heroImage}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Face portrait of Damien Senger looking directly at the camera. The person is smiling at the camera while wearing an overall outfit. They is also having blue hair and several piercings."
          />
        </div>
      </>
    )}
  />
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
