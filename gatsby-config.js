const path = require('path');

// Gatsby config
module.exports = {
  siteMetadata: {
    title: `Reactiflux`,
    description: `The world's largest React.js chat server`,
    url: `https://www.reactiflux.com/`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'transcripts',
        path: `${__dirname}/src/transcripts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdPages',
        path: `${__dirname}/src/md-pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        path: `${__dirname}/src/assets/`,
        rule: {
          include: [/icons/, /svg\//],
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Reactiflux',
        short_name: 'Reactiflux',
        start_url: '/',
        backgroud_color: '#ffffff',
        theme_color: '#dc1d64',
        display: 'standalone',
        icon: 'src/assets/reactiflux.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-68559005-1',
        allowAdFeatures: false,
      },
    },
  ],
};
