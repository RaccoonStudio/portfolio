import PropTypes from "prop-types"
import React from "react"
import Styles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CopyToClipboard } from "react-copy-to-clipboard"
import raccoonLogo from "../../images/raccoon-logo-inverted.svg"

const Footer = ({ siteTitle, networks, componentId }) => (
  <footer className={Styles.footer} id={componentId}>
    <div className={Styles.footer__container}>
      <div className={Styles.footer__branding}>
        <img
          className={Styles.footer__logo}
          src={raccoonLogo}
          alt={siteTitle}
        />
        <ul className={Styles.footer__networks}>
          {networks.map((item, index) => (
            <li key={index}>
              <a
                className={Styles.footer__network}
                href={item.target}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", item.icon]} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={Styles.footer__storyContainer}>
        <h2 className={Styles.footer__storyTitle}>
          Let&apos;s discuss together?
        </h2>
        <p className={Styles.footer__story}>
          I love <em>rooibos tea</em>, <em>oat-milk latte</em>,{" "}
          <em lang="sv">kanelbullar</em> and discussing{" "}
          <em>how to make the Web a better place</em>.
        </p>
        <p className={Styles.footer__story}>
          So, whether you are <em>a conference or meetup organiser</em>,{" "}
          <em>a project maker</em> or just interested by my profile,{" "}
          <em>let&apos;s have a chat!</em>
        </p>
        <p className={Styles.footer__contact}>
          <a
            className={Styles.footer__email}
            href="mailto:hello@raccoon.studio"
          >
            hello@raccoon.studio
          </a>
          <CopyToClipboard text="hello@raccoon.studio">
            <button className={Styles.footer__emailCopy}>Copy email</button>
          </CopyToClipboard>
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  networks: PropTypes.array,
  componentId: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: "",
  networks: null,
  componentId: null,
}

export default Footer
