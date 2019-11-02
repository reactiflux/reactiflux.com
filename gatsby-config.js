// require("dotenv").config();

// Gatsby config
module.exports = {
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "transcripts",
        path: `${__dirname}/src/transcripts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "md-pages",
        path: `${__dirname}/src/md-pages/`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        path: `${__dirname}/src/assets/`,
        rule: {
          include: [/icons/, /svg\//]
        }
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-prismjs",
          //   options: {
          //     showLineNumbers: true,
          //     noInlineHighlight: true,
          //   },
          // },
        ]
      }
    },
    "gatsby-plugin-styled-components"
  ]
};
