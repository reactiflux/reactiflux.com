const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src", "templates", "Transcript.js");
  const result = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "transcripts" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        nodes {
          name
          relativeDirectory
          childMarkdownRemark {
            id
            frontmatter {
              date
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.allFile.nodes.forEach(node => {
    const { id, frontmatter } = node.childMarkdownRemark;
    const { name, relativeDirectory } = node;
    // console.log(path.join(relativeDirectory, name));
    createPage({
      path: path.join(relativeDirectory, name),
      component: blogPostTemplate,
      context: { id, date: frontmatter.date }
    });
  });
};
