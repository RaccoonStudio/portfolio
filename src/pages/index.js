import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Introduction from "../components/introduction"
import Specialties from "../components/specialties"
import { graphql } from "gatsby"

const IndexPage = context => (
  <Layout>
    <SEO
      title="Web accessibility & Inclusive Design"
      keywords={[
        `design studio`,
        `accessibility`,
        `inclusive design`,
        `damien senger`,
      ]}
    />
    <Hero
      salutations={context.data.site.siteMetadata.heroSalutations}
      heroImage={context.data.heroImage}
    />
    <Introduction />
    <Specialties />
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        heroSalutations {
          content
          lang
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero/damiensenger.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1280, height: 720) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
