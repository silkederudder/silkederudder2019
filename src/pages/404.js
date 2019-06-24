import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './404.module.css'

const NotFoundPage = () => {
  const url = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404.gif" }) {
        publicURL
      }
    }
  `).placeholderImage.publicURL


  return (
    <Layout>
      <SEO title="Not found" keywords={[`not found`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
      <Helmet title='Not found' />
      <section className={styles.notfound}>
        <div className={styles.notfound__content}>
          <h2 className={styles.notfound__title}>404</h2>
          <h3 className={styles.notfound__text}>Oops, looks like you are lost.</h3>
          <Link to="/" className={styles.notfound__link}>Go home</Link>
        </div>
        <img src={url} alt="Page not found" className={styles.notfound__img}/>
      </section>
    </Layout>
  )
}

export default NotFoundPage;