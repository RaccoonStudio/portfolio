import React from "react"
import Styles from "../styles/components/skiplinks.module.scss"

const skipTo = e => {
  var destination = document.querySelector(
    e.currentTarget.attributes["href"].value
  )

  destination.setAttribute("tabIndex", "-1")
  destination.addEventListener("blur", () => {
    destination.removeAttribute("tabIndex")
  })

  e.preventDefault()
  destination.focus()
}

const SkipLinks = () => (
  <div className={Styles.SkipLinks}>
    <a href="#main" onClick={skipTo}>
      Skip to content
    </a>
  </div>
)

SkipLinks.propTypes = {}

SkipLinks.defaultProps = {}

export default SkipLinks
