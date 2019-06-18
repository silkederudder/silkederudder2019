const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectData = await graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  );

  const projectPages = projectData.data.allContentfulProject.edges.forEach(
    (projectPage) => {
      createPage({
        path: `/project/${projectPage.node.slug}/`,
        component: path.resolve('./src/templates/project.js'),
        context: {
          slug: projectPage.node.slug,
          id: projectPage.node.id,
        },
      })
    },
  );

  return projectPages;
}
