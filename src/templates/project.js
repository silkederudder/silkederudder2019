import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby";
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <SEO title="Info" keywords={[`project`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
        <Helmet title={`${project.title} | ${siteTitle}`} />
        
        <Link to="/">Close project</Link>
        <section>
          <h2>{project.title}</h2>
          <article>
            <h3>Intro</h3>
            <p>{project.intro}</p>
            <dl>
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{project.team}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </article>
          <article>
            { 
              project.caseMovie !== null ? 
                <video width="1920" height="1080" controls>
                  <source src={`https:${project.caseMovie.file.url}`} title={project.caseMovie.title} type={project.caseMovie.file.contentType}/>
                </video> 
                : 
                <Img alt={project.title} fluid={project.coverImage.fluid}/> 
            }
            <h3>The challenge</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illum officiis voluptatem delectus corporis expedita numquam alias natus est, quis, exercitationem minima hic quam, nostrum magni ipsam. Nobis, iste magni.</p>
          </article>
          <article>
            <h3>Concept</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores, numquam necessitatibus incidunt autem porro nulla distinctio eum, consequatur explicabo molestias illo nemo dolores magni! Porro error fugiat quod debitis?</p>
          </article>
        </section>
        <Link to="/">Close project</Link>
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