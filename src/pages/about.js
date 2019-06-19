import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import { graphql } from "gatsby";
import get from 'lodash/get'
import Img from "gatsby-image";
import base from './base.module.css'
import styles from './index.module.css'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const about = get(this, 'props.data.allContentfulPerson.edges')[0].node

    return (
      <Layout>
        <SEO title="About" keywords={[`info`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
        <Helmet title='Info' />
        <section className={styles.info}>
          <h2 className={base.hide}>Info</h2>
          <article className={styles.info__about}>
            <h3>About</h3>
            <Img className={styles.info__img} alt="Silke Derudder" fluid={about.image.fluid} />
            <p className={styles.info__text}>I&#39;m <span>Silke</span>, {about.body.body}</p>
          </article>
          <article className={styles.info__contact}>
            <h3 className={base.hide}>Get in touch</h3>
            <p className={styles.info__mail}>Send me an <br/> <a href="mailto:hello@silkederudder.be">email</a></p>
            <ul className={styles.info__socials}>
              <li className={styles.info__socialItem}><a className={base.link} href="https://github.com/silkederudder">Github</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://linkedin.com/silkederudder">LinkedIn</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://www.behance.net/silkederudder">Behance</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://twitter.com/silkederudder">Twitter</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://instagram.com/silkederudder">Instagram</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="">Resume</a></li>
            </ul>
          </article>
        </section>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson {
      edges {
        node {
          body {
            body
          }
          image {
            file {
              url
            }
            fluid(
              maxWidth: 1536
              maxHeight: 1024
              resizingBehavior: FILL
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
