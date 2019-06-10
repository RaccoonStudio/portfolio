import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = (file, alt, title) => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt={alt}
      title={title}
      aria-current
    />
  )
}

Image.propTypes = {
  /**
   * Specify the file used by the component
   */
  file: PropTypes.string,

  /**
   * Specify the alt attribute of the picture element
   */
  alt: PropTypes.string,

  /**
   * Specify the title attribute of the picture element
   */
  title: PropTypes.string,
}

export default Image
