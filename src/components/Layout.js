import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  pageContainer,
  headerText,
  footer,
  footerContent,
  footerText,
  footerSocialLinks,
  footerSocialLink,
  socialIcon,
  headerLink,
} from "./Layout.module.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <p className={footerText}>Apollo Headphones Inc.</p>
        <p className={footerText}>Made with 🤘 in the Queen City</p>
      </div>
      <div className={footerSocialLinks}>
        <a
          className={footerSocialLink}
          href="http://instagram.com"
          target="_blank"
        >
          <FontAwesomeIcon className={socialIcon} icon={faInstagram} />
        </a>
        <a
          className={footerSocialLink}
          href="http://facebook.com"
          target="_blank"
        >
          <FontAwesomeIcon className={socialIcon} icon={faFacebook} />
        </a>
        <a
          className={footerSocialLink}
          href="http://twitter.com"
          target="_blank"
        >
          <FontAwesomeIcon className={socialIcon} icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

const Layout = (props) => {
  return (
    <div className={pageContainer}>
      <Link className={headerLink} to="/">
        <h1 className={headerText}>Apollo Headphones</h1>
      </Link>
      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
