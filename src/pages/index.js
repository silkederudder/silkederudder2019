import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Helmet from 'react-helmet'
import get from 'lodash/get'
import SEO from "../components/seo";

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
                  <h3>
                    <Link to={`/project/${node.slug}`}>{node.title}</Link>
                  </h3>
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
        }
      }
    }
  }
`
