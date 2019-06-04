import { css } from "styled-components"
import ColorSystem from "./ColorSystem"
import SizingSystem from "./SizingSystem"

const ContainerSystem = {}

ContainerSystem.default = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  width: 85%;
  background: ${ColorSystem.gray.g50};
  z-index: -3;

  @media (min-width: ${SizingSystem.media.laptop}) {
    width: 1024px;
  }

  @media (min-width: ${SizingSystem.media.desktop}) {
    width: 1280px;
  }
`

ContainerSystem.narrow = css`
  ${ContainerSystem.default};
  z-index: 0;

  @media (min-width: ${SizingSystem.media.laptop}) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (min-width: ${SizingSystem.media.desktop}) {
    padding-left: 160px;
    padding-right: 160px;
  }
`

export default ContainerSystem
