import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SEO from "../components/seo";
import Img from "gatsby-image";

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Helmet title={siteTitle} />
  
        <div className="projects">
          <ul>
            {projects.map(({ node }) => {
              return (
                <li key={node.slug}>
                    <Link to={`/project/${node.slug}`}>
                      <p>{node.title}</p>
                      <Img
                        alt={node.title}
                        fluid={node.image.fluid}
                      />
                    </Link>
                </li>
              )
            })}
          </ul>
        </div>
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
          image {
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
