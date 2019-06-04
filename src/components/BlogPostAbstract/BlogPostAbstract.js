import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { SizingSystem, TypographySystem } from "../core"

const StyledArticle = styled.article`
  margin-bottom: ${SizingSystem.values.wide};
  max-width: 64rem;

  @media (min-width: ${SizingSystem.media.laptop}) {
    margin-left: ${SizingSystem.values.wider};

    &:nth-of-type(even) {
      margin-left: auto;
      margin-right: ${SizingSystem.values.wider};
    }
  }
`

const StyledTitleLink = styled(Link)``

const StyledTitle = styled.h2`
  margin-top: 0;
  font-family: ${TypographySystem.stack.titleStack};
  font-size: 3.2rem;
`

const StyledExcerpt = styled.p``

const StyledTime = styled.time`
  float: left;
  font-weight: ${TypographySystem.weights.light};

  &::after {
    display: inline-block;
    margin: 0 ${SizingSystem.values.demi};
    content: "•";
    font-weight: ${TypographySystem.weights.default};
  }
`

const StyledReadMore = styled(Link)`
  &::after {
    display: inline-block;
    height: ${SizingSystem.values.demi};
    margin-left: ${SizingSystem.values.demi};
    width: ${SizingSystem.values.demi};
    content: "";
    border-bottom: ${SizingSystem.values.double} solid currentColor;
    border-right: ${SizingSystem.values.double} solid currentColor;
    transform: rotate(-45deg);
    vertical-align: middle;
  }
`

const BlogPostAbstract = post => {
  const postInfo = post.post.frontmatter
  const postExcerpt = post.post.excerpt

  return (
    <StyledArticle>
      <StyledTitle>
        <StyledTitleLink to={postInfo.path} children={postInfo.title} />
      </StyledTitle>
      <StyledTime children={postInfo.date} />
      <StyledExcerpt children={postExcerpt} />
      <StyledReadMore
        to={postInfo.path}
        children={`Continue reading ${postInfo.title}`}
      />
    </StyledArticle>
  )
}

BlogPostAbstract.propTypes = {
  /**
   * Specify the information about the post being displayed
   */
  post: PropTypes.object.isRequired,
}

export default BlogPostAbstract
