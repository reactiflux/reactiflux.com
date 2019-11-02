const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      transcripts: allFile(
        filter: { sourceInstanceName: { eq: "transcripts" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        nodes {
          name
          childMarkdownRemark {
            id
            frontmatter {
              date
            }
          }
        }
      }
      mdPages: allFile(filter: { sourceInstanceName: { eq: "mdPages" } }) {
        nodes {
          name
          childMarkdownRemark {
            id
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

  // Transcripts
  result.data.transcripts.nodes.forEach(node => {
    const { id, frontmatter } = node.childMarkdownRemark;
    const { name } = node;
    createPage({
      path: path.join("transcripts", name),
      component: path.resolve("src", "templates", "Transcript.js"),
      context: { id, date: frontmatter.date }
    });
  });

  // Markdown pages
  result.data.mdPages.nodes.forEach(node => {
    const { id } = node.childMarkdownRemark;
    const { name } = node;
    createPage({
      path: name,
      component: path.resolve("src", "templates", "CopyPage.js"),
      context: { id }
    });
  });
};
