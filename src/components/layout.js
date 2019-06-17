import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import Header from "./header";
import reset from './reset.css'
import base from './base.css'
import styles from './layout.module.css'

const Layout = ({children}) => (
  <StaticQuery query={pageQuery}
    
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.main}>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

export const pageQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`