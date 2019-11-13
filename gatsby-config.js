// require("dotenv").config();

// Gatsby config
module.exports = {
  pathPrefix: '/',
  plugins: [
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
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
