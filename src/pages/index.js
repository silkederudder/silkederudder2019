import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SEO from "../components/seo";
import Img from "gatsby-image";
import styles from './index.module.css'
import base from './base.module.css'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

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
                      <article className={styles.index__projectItem}>
                        <div className={styles.index__projectInfo}>
                          <h3 className={styles.projectTitle}>{node.title}</h3>
                          <p className={styles.index__tags}>{node.tags}</p>
                        </div>
                        <Img className={styles.index__projectImg} alt={node.title} fluid={node.coverImage.fluid} />
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