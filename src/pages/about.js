import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import { graphql } from "gatsby";
import get from 'lodash/get'
import Img from "gatsby-image";

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const about = get(this, 'props.data.allContentfulPerson.edges')[0].node

    return (
      <Layout>
        <SEO title="About" keywords={[`info`, `silke derudder`, `design`, `development`, `contact`, `creative`, `portfolio`]} />
        <Helmet title='Info' />
        <section>
          <h2>Info</h2>
          <article>
            <h3>About</h3>
            <Img
              alt="Silke Derudder"
              fluid={about.image.fluid}
            />
            <p>I&#39;m <span>Silke</span>, {about.body.body}</p>
          </article>
          <article>
            <h3>Get in touch</h3>
            <p>Send me an <br/> <a href="mailto:hello@silkederudder.be">email</a></p>
            <ul>
              <li><a href="https://github.com/silkederudder">Github</a></li>
              <li><a href="https://linkedin.com/silkederudder">LinkedIn</a></li>
              <li><a href="https://www.behance.net/silkederudder">Behance</a></li>
              <li><a href="https://twitter.com/silkederudder">Twitter</a></li>
              <li><a href="https://instagram.com/silkederudder">Instagram</a></li>
              <li><a href="https://dribbble.com/silkederudder">Dribble</a></li>
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
