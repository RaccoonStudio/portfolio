import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';
import Img from 'gatsby-image';
import { ColorSystem, ContainerSystem, SizingSystem, TypographySystem } from '../components/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageTitle from '../components/PageTitle';

const StyledBlogpost = styled.article`
  ${ContainerSystem.narrow}
  flex-direction: column;
  margin-bottom: ${SizingSystem.values.full};

  @media (min-width: ${SizingSystem.media.desktop}) {
    padding-bottom: ${SizingSystem.values.full};
  }
`;

const StyledHeader = styled.header`
  margin: ${SizingSystem.values.extraLarge} 0;

  @media (min-width: ${SizingSystem.media.laptop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledPostInfos = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 0;
  color: ${ColorSystem.gray.g800};

  @media (min-width: ${SizingSystem.media.laptop}) {
    justify-content: center;
  }

  @media (min-width: ${SizingSystem.media.desktop}) {
    justify-content: center;
  }
`;

const StyledPostInfoLabel = styled.dt`
  margin-right: ${SizingSystem.values.demi};

  &:not(:first-child) {
    margin-left: ${SizingSystem.values.base};

    &::before {
      content: '•';
      padding-right: ${SizingSystem.values.base};
      color: ${ColorSystem.brand.raccoonBlue};
    }
  }
`;

const StyledPostInfoValue = styled.dd`
  margin-left: 0;
`;

const StyledFooter = styled.footer`
  margin: ${SizingSystem.values.wider} auto ${SizingSystem.values.large};
  max-width: 32rem;
  color: ${ColorSystem.gray.g800};
  font-size: ${TypographySystem.sizes.defaultContent};
  text-align: center;

  @media (min-width: ${SizingSystem.media.desktop}) {
    margin-top: 9.6rem;
  }
`;

const StyledAuthor = styled.strong`
  display: block;
  margin: ${SizingSystem.values.base} auto;
  color: ${ColorSystem.gray.g900};
  font-weight: ${TypographySystem.weights.bold};
`;

const StyledAuthorAvatar = styled(Img)`
  display: block;
  border: ${SizingSystem.values.demi} solid ${ColorSystem.brand.raccoonBlue};
  border-radius: 50%;
  box-sizing: content-box;
  overflow: hidden;
`;

const StyledBio = styled.p`
  margin-top: ${SizingSystem.values.base};
`;

const StyledContent = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 65ch;
  color: ${ColorSystem.brand.raccoon};
  font-size: ${TypographySystem.sizes.blogContent};
  line-height: ${TypographySystem.lineheight.comfortable};

  & a::after {
    content: none;
  }

  & blockquote {
    margin-left: -1.8rem;
    padding-left: ${SizingSystem.values.medium};
    border-left: ${SizingSystem.values.double} solid ${ColorSystem.brand.raccoonTurquoise};
    color: ${ColorSystem.gray.g900};
    font-style: italic;
  }

  & hr {
    display: block;
    height: ${SizingSystem.values.double};
    margin: ${SizingSystem.values.wider} auto;
    width: ${SizingSystem.values.wider};
    background: ${ColorSystem.brand.raccoonTurquoise};
    border: 0;
  }

  & img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  & p {
    margin-bottom: ${SizingSystem.margins.paragraph};
  }

  & pre {
    margin: ${SizingSystem.margins.pre} auto;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout mainClass="blog">
      <SEO title={frontmatter.title} keywords={frontmatter.tags} />
      <StyledBlogpost>
        <StyledHeader>
          <PageTitle>{frontmatter.title}</PageTitle>
          <StyledPostInfos>
            <StyledPostInfoLabel>Posted on</StyledPostInfoLabel>
            <StyledPostInfoValue>
              <time pubdate="pubdate" dateTime={moment(frontmatter.date).format('YYYY-MM-DD')}>
                {frontmatter.date}
              </time>
            </StyledPostInfoValue>
            <StyledPostInfoLabel>Written by</StyledPostInfoLabel>
            <StyledPostInfoValue>Damien Senger</StyledPostInfoValue>
          </StyledPostInfos>
        </StyledHeader>
        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        <StyledFooter aria-labelledby="authorName">
          <StyledAuthorAvatar
            fixed={data.authorAvatar.childImageSharp.fixed}
            alt="Face portrait of Damien Senger looking directly at the camera."
          />
          <StyledAuthor id="authorName">{data.site.siteMetadata.blogAuthor}</StyledAuthor>
          <StyledBio>{data.site.siteMetadata.blogBio}</StyledBio>
        </StyledFooter>
      </StyledBlogpost>
    </Layout>
  );
}

Template.propTypes = {
  /**
   * Specify the data used by the blogTemplate component
   */
  data: PropTypes.Object,
};

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        blogAuthor
        blogBio
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "dddd D MMMM YYYY")
        path
        title
        tags
      }
    }
    authorAvatar: file(relativePath: { eq: "damien-avatar-400.jpg" }) {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
