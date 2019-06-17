import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className={styles.header__title}><Link to='/'>{siteTitle}</Link></h1>
    <nav className={styles.header__navigation}>
      <ul className={styles.header__list}>
        <li className={styles.header__listitem}><Link className={styles.header__link} to="/">Projects</Link></li>
        <li className={styles.header__listitem}><Link className={styles.header__link} to="/about">Info</Link></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Silke Derudder`
};

export default Header;
