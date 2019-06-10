import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { AccessibilityHelpers, ColorSystem, SizingSystem } from "../core"

const StyledButton = styled.button`
  ${AccessibilityHelpers.outline}
  display: inline-flex;
  align-content: center;
  align-self: center;
  margin-top: auto;
  padding: ${SizingSystem.values.base} ${SizingSystem.values.small}
    ${SizingSystem.values.base} ${SizingSystem.values.medium};
  background-color: transparent;
  border: ${SizingSystem.values.double} solid currentColor;
  color: ${ColorSystem.brand.raccoon};
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:focus,
  &:hover {
    background-color: ${ColorSystem.brand.raccoon};
    color: ${ColorSystem.generic.white};

    & > svg {
      fill: currentColor;
    }
  }

  & > svg {
    align-self: center;
    height: ${SizingSystem.values.medium};
    margin-left: ${SizingSystem.values.demi};
    width: ${SizingSystem.values.medium};
    fill: currentColor;
    transition: fill 0.2s ease-in-out;
  }
`

const Button = props => {
  const markup = props.href ? `a` : `button`

  return (
    <StyledButton as={markup} {...props}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  /**
   * Specify the content of the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Specify the target of the button, and transform it as a link
   */
  href: PropTypes.string,
}

Button.defaultProps = {
  href: "",
}

export default Button
