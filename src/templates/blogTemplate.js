import React from "react"
import { graphql } from "gatsby"
import Styles from "./blogTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <section className={Styles.blogpost}>
      <article className={Styles.blogpost__article}>
        <header className={Styles.blogpost__header}>
          <h1 className={Styles.blogpost__title}>{frontmatter.title}</h1>
        </header>
        <div
          className={Styles.blogpost__content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </section>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
  }
`
