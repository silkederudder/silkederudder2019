import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SEO from "../components/seo";
import Img from "gatsby-image";
import styles from './index.module.css'
import base from './base.module.css'

const handleTilt = (e) => {
  const max = 5;
  const w = e.currentTarget.clientWidth;
  const h = e.currentTarget.clientHeight;

  e.currentTarget.style = `will-change: transform; transform: perspective(1000px) rotateY(${(e.pageX / w) * max}deg) rotateX(${(e.pageY / h) * max}deg) scale3d(.9, .9, .9);`;
}

const handleReset = (e) => {
  e.currentTarget.style = `will-change: transform; transform: perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1);`;
}

const IndexPage = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const projects = get(props, 'data.allContentfulProject.edges')

  return (
    <Layout>
      <SEO title="Home" keywords={[`projects`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
      <Helmet title={` Projects`} />

      <section className={styles.index}>
        <h2 className={base.hide}>Projects</h2>
        <ul className={styles.index__projects}>
          {projects.map(({ node }) => {
            return (
              <li key={node.slug} className={styles.index__project}>
                  <Link to={`/project/${node.slug}`} className={styles.index__projectLink}>
                    <article className={styles.index__projectItem} onMouseMove={handleTilt} onMouseLeave={handleReset}>
                      <div className={styles.index__overlay}></div>
                      <div className={styles.index__projectInfo}>
                        <h3 className={styles.index__projectTitle}>{node.title}</h3>
                        <p className={styles.index__tags}>{node.tags}</p>
                      </div>
                      <Img className="index__projectImg" alt={node.title} fluid={node.coverImage.fluid} />
                    </article>
                  </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
          slug
          tags
          coverImage {
            file {
              url
            }
            fluid(
              maxWidth: 1800
              maxHeight: 900
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