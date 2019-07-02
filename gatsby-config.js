require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: `Silke Derudder`,
    description: `Portfolio of Silke Derudder, a creative developer.`,
    author: `@silkederudder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-silke-derudder`,
        short_name: `silkederudder`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFF469`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ 
            stage: 2,
            features: {
              'nesting-rules': true
            }}),
          require(`stylelint`),
          require(`postcss-reporter`)({ clearReportedMessages: true }),
          require(`postcss-will-change`),
          require(`postcss-color-function`),
          require(`postcss-import`),
          require(`postcss-cssnext`)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ['GTAmerica', 'GTAmericaExtended', 'GTAmericaExpanded'],
          urls: ['/css/GTAmerica.css']
        }
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
