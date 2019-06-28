import React, { createRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import get from 'lodash/get'
import Img from "gatsby-image";
import base from './base.module.css'
import styles from './about.module.css'
import Media from 'react-media';

const initialState = {
  show: 'false'
};

let img;
const imgStyle = {
  position: `absolute`,
  overflow: `hidden`,
}

const resetStyle = {
  transform: `none`,
  opacity: `1`,
} 

const none = {
  display: `none`,
}

const handleShowImg = e => {
  const $img = img.current.imageRef.current.offsetParent;
  const offsetX = (window.innerWidth - document.querySelector('.wrapper').clientWidth) / 2;
  const x = e.pageX - offsetX;
  const y = e.pageY;
  $img.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 100%), 0)`;
  $img.style.opacity = `.8`;
}

const handleHideImage = () => {
  const $img = img.current.imageRef.current.offsetParent;
  $img.style.opacity = `0`;
}

const AboutPage = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const about = get(props, 'data.allContentfulPerson.edges')[0].node
  img = createRef();

  return (
    <Layout>
      <SEO title={`Info | ${siteTitle}`} keywords={[`info`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
      <Helmet title="Info" />
      <section className={styles.info}>
        <h2 className={base.hide}>Info</h2>

        <article className={styles.info__about}>
          <h3 className={base.hide}>About</h3>
          <Media query="(max-width: 900px)" defaultMatches={initialState.show === false}>
            {matches =>
              matches ? (
                <>
                  <Img className="info__img" alt="Silke Derudder" fluid={about.image.fluid} ref={img} style={resetStyle}/>
                  <p className={styles.info__text}>I&#39;m <span className={styles.info__name}>Silke</span>, {about.body.body}</p>
                </>
              ) : (
                <>
                  <Img className="info__img" alt="Silke Derudder" fluid={about.image.fluid} ref={img} style={imgStyle}/>
                  <p className={styles.info__text}>I&#39;m <span className={styles.info__name} onMouseMove={handleShowImg} onMouseLeave={handleHideImage}>Silke</span>, {about.body.body}</p>
                </>
              )
            }
          </Media>
        </article>
        <article className={styles.info__contact}>
          <h3 className={base.hide}>Get in touch</h3>
          <p className={styles.info__mail}>Send me an <br/> <a href="mailto:hello@silkederudder.be">email</a></p>
          <ul className={styles.info__socials}>
            <div className={styles.info__socialsBlock1}>
              <li className={styles.info__socialItem}><a className={base.link} href="https://github.com/silkederudder">Github</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://linkedin.com/silkederudder">LinkedIn</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://www.behance.net/silkederudder">Behance</a></li>
            </div>
            <div className={styles.info__socialsBlock2}>
              <li className={styles.info__socialItem}><a className={base.link} href="https://twitter.com/silkederudder">Twitter</a></li>
              <li className={styles.info__socialItem}><a className={base.link} href="https://instagram.com/silkederudder">Instagram</a></li>
              <li className={styles.info__socialItem} style={none}><a className={base.link} href="">Resume</a></li>
            </div>
          </ul>
        </article>
      </section>
    </Layout>
  )
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
