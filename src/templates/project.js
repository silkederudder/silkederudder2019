import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby";
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import styles from './project.module.css'
import base from '../pages/base.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <SEO title="Info" keywords={[`project`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
        <Helmet title={`${project.title} | ${siteTitle}`} />
        
        <section className={styles.close__right}>
          <Link to="/" className={styles.detail__link}>Close project</Link>
        </section>
        <section className={styles.detail}>
          <h2 className={styles.detail__title}>{project.title}</h2>
          <p className={styles.detail__tags}>{project.tags}</p>
          <article className={styles.detail__header}>
            <h3 className={base.hide}>Intro</h3>
            <p className={styles.detail__intro}>{project.intro}</p>
            <div className={styles.detail__info}>
              <dl className={styles.detail__infoList}>
                <div className={styles.detail__infoItem}>
                  <dt className={styles.detail__heading}>Client</dt>
                  <dd className={base.text}>{project.client}</dd>
                </div>
                <div className={styles.detail__infoItem}>
                  <dt className={styles.detail__heading}>Team</dt>
                  <dd className={base.text}>{project.team}</dd>
                </div>
                <div className={styles.detail__infoItem}>
                  <dt className={styles.detail__heading}>Role</dt>
                  <dd className={base.text}>{project.role}</dd>
                </div>
                <div className={styles.detail__infoItem}>
                  <dt className={styles.detail__heading}>Year</dt>
                  <dd className={base.text}>{project.year}</dd>
                </div>
              </dl>
              <a className={styles.detail__projectLink} href={project.url}>Check this out</a>
            </div>
          </article>
          <article className={styles.detail__body}>
            <header className={styles.detail__header}>
              { 
                project.caseMovie !== null ? 
                  <video width="1920" height="1080" controls className={styles.detail__video}>
                    <source src={`https:${project.caseMovie.file.url}`} title={project.caseMovie.title} type={project.caseMovie.file.contentType}/>
                  </video> 
                  : 
                  <Img className="detail__coverImg" alt={project.title} fluid={project.coverImage.fluid}/> 
              }
            </header>
            <div className={styles.detail__content}>
              <h3 className={styles.detail__subtitle}>The challenge</h3>
              <p className={base.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum officiis voluptatem delectus corporis expedita numquam alias natus est, quis, exercitationem minima hic quam, nostrum magni ipsam. Nobis, iste magni.</p>
            </div>
          </article>
          <article className={styles.detail__body}>
            <header className={styles.detail__images}>
              {/* IMAGES */}
            </header>
            <div className={styles.detail__content}>
              <h3 className={styles.detail__subtitle}>Concept</h3>
              <p className={base.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, numquam necessitatibus incidunt autem porro nulla distinctio eum, consequatur explicabo molestias illo nemo dolores magni! Porro error fugiat quod debitis?</p>
            </div>
          </article>
        </section>
        <section className={styles.close__center}>
          <Link to="/" className={styles.detail__link}>Close project</Link>
        </section>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      tags
      intro
      client
      team
      role
      year
      url
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
      caseMovie {
        title
        file {
          contentType
          fileName
          url
        }
      }
    }
  }
`