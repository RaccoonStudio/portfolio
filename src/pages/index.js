import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query heroSalutationsQuery {
        site {
          siteMetadata {
            heroSalutations {
              content
              lang
            }
          }
        }
      }
    `}
    render={data => (
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
        <Hero salutations={data.site.siteMetadata.heroSalutations} />
      </Layout>
    )}
  />
)

export default IndexPage
