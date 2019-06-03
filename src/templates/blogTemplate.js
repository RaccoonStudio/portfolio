import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import moment from "moment"
import { ColorSystem, ContainerSystem, SizingSystem } from "../components/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledBlogpost = styled.article`
  ${ContainerSystem.narrow}
  flex-direction: column;

  @media (min-width: ${SizingSystem.media.desktop}) {
    padding-top: ${SizingSystem.values.extraLarge};
    padding-bottom: ${SizingSystem.values.extraLarge};
  }
`

const StyledHeader = styled.header``

const StyledPostTitle = styled.h1`
  margin-bottom: 0.3em;

  @media (min-width: ${SizingSystem.media.desktop}) {
    font-size: 4.8rem;
    font-weight: 100;
    text-align: center;
  }
`

const StyledPostInfos = styled.dl`
  display: flex;
  justify-content: center;
  margin-top: 0;
  color: ${ColorSystem.gray.g800};

  @media (min-width: ${SizingSystem.media.desktop}) {
    justify-content: center;
  }
`

const StyledPostInfoLabel = styled.dt`
  &:not(:first-child) {
    margin-left: ${SizingSystem.values.base};

    &::before {
      content: "•";
      padding-right: ${SizingSystem.values.base};
      color: ${ColorSystem.brand.raccoonBlue};
    }
  }
`

const StyledPostInfoValue = styled.dd`
  margin-left: ${SizingSystem.values.demi};
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout mainClass="blog">
      <SEO title={frontmatter.title} keywords={frontmatter.tags} />
      <StyledBlogpost>
        <StyledHeader>
          <StyledPostTitle children={frontmatter.title} />
          <StyledPostInfos>
            <StyledPostInfoLabel children="Posted on" />
            <StyledPostInfoValue>
              <time
                pubdate="pubdate"
                datetime={moment(frontmatter.date).format("YYYY-MM-DD")}
                children={frontmatter.date}
              />
            </StyledPostInfoValue>
            <StyledPostInfoLabel children="Writted by" />
            <StyledPostInfoValue children="Damien Senger" />
          </StyledPostInfos>
        </StyledHeader>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledBlogpost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "dddd D MMMM YYYY")
        path
        title
        tags
      }
    }
  }
`
