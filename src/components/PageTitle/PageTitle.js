import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { SizingSystem, TypographySystem } from "../core"

const StyledPageTitle = styled.h1`
  margin-bottom: 0.3em;
  font-size: 3.2rem;
  font-weight: ${TypographySystem.weights.light};

  @media (min-width: ${SizingSystem.media.laptop}) {
    font-size: 4rem;
    font-weight: ${TypographySystem.weights.thin};
    text-align: center;
  }

  @media (min-width: ${SizingSystem.media.desktop}) {
    font-size: 4.8rem;
    font-weight: ${TypographySystem.weights.hairstyle};
  }
`

const PageTitle = props => (
  <>
    <StyledPageTitle children={props.children} {...props} />
  </>
)

PageTitle.propTypes = {
  /**
   * Specify the content of the title
   */
  children: PropTypes.node.isRequired,
}

PageTitle.defaultProps = {}

export default PageTitle
