import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from './header.module.css'
import TransitionLink from "gatsby-plugin-transition-link"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>
      <TransitionLink exit={{length: 1}} entry={{length: .5}} to='/'>{siteTitle}</TransitionLink>
    </h1>
    <nav className={styles.header__nav}>
      <ul className={styles.header__list}>
        <li className={styles.header__listitem}>
          <TransitionLink exit={{length: 1}} entry={{length: .5}} activeClassName="header__nav--active" className={styles.header__link} to="/">Projects</TransitionLink>
        </li>
        <li className={styles.header__listitem}>
          <TransitionLink exit={{length: 1}} entry={{length: .5}} activeClassName="header__nav--active" className={styles.header__link} to="/about">Info</TransitionLink>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: `Silke Derudder`
};

export default Header;
