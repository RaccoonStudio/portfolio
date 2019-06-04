import { css } from "styled-components"
import ColorSystem from "./ColorSystem"
import SizingSystem from "./SizingSystem"

const AccessibilityHelpers = {}

AccessibilityHelpers.outline = css`
  &:active,
  &:focus {
    outline: 0.2rem dashed ${ColorSystem.brand.raccoon};
    outline-offset: ${SizingSystem.values.demi};
  }
`

AccessibilityHelpers.outlineInverted = css`
  &:active,
  &:focus {
    outline: 0.2rem dashed ${ColorSystem.semantic.inverted};
    outline-offset: ${SizingSystem.values.demi};
  }
`

AccessibilityHelpers.srOnly = css`
  position: absolute;
  height: 1px;
  padding: 0;
  width: 1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
`

AccessibilityHelpers.srOnlyFocusable = css`
  ${AccessibilityHelpers.outlineInverted};

  &:active,
  &:focus {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    height: auto;
    margin: ${SizingSystem.demi};
    padding: ${SizingSystem.base} ${SizingSystem.large};
    width: auto;
    background: ${ColorSystem.brand.raccoon};
    color: ${ColorSystem.generic.white};
    clip: auto;
    outline-offset: initial;
    overflow: visible;
    transition: none;
    white-space: normal;
    z-index: 50;
  }
`

export default AccessibilityHelpers
