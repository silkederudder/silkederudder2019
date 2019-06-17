import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";
import get from 'lodash/get'
import PropTypes from "prop-types";
import Layout from "../components/layout"
// import SEO from "../components/seo"

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${project.title} | ${siteTitle}`} />
            <h2 className="section-headline">{project.title}</h2>
      </Layout>
    )
  }
}

export default ProjectTemplate

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

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
    }
  }
`