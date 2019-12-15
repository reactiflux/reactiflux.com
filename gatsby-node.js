const path = require('path');
const remark = require('remark');
const remarkHTML = require('remark-html');

const BlogIndex = path.resolve('src', 'templates', 'BlogIndex.js');
const CopyPage = path.resolve('src', 'templates', 'CopyPage.js');
const Transcript = path.resolve('src', 'templates', 'Transcript.js');

const frontmatterFieldSettings = [
  { field: 'description', defaultValue: null, supportMarkdown: true },
  { field: 'location', defaultValue: null },
  { field: 'people', defaultValue: null, supportMarkdown: true },
  { field: 'recording', defaultValue: null, supportMarkdown: true },
  { field: 'time', defaultValue: null },
];

exports.onCreateNode = ({ node }) => {
  if (node.frontmatter) {
    frontmatterFieldSettings.forEach(
      ({ field, defaultValue, supportMarkdown }) => {
        const value = node.frontmatter[field];

        if (supportMarkdown && value) {
          node.frontmatter[field] = remark()
            .use(remarkHTML)
            .processSync(value)
            .toString()
            .replace(/<\/?p>/g, '');
        }

        if (defaultValue !== undefined && !value) {
          node.frontmatter[field] = defaultValue;
        }
      },
    );
  }
  return node;
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      transcripts: allFile(
        filter: { sourceInstanceName: { eq: "transcripts" } }
        sort: {
          fields: [childMarkdownRemark___frontmatter___date]
          order: DESC
        }
      ) {
        nodes {
          name
          childMarkdownRemark {
            id
            html
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
      blog: allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          extension: { in: ["md"] }
        }
      ) {
        nodes {
          name
          relativeDirectory
          childMarkdownRemark {
            id
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Transcripts
  result.data.transcripts.nodes.forEach((node) => {
    const { id, html = '', frontmatter } = node.childMarkdownRemark || {};
    const { name } = node;
    if (html.trim().length) {
      createPage({
        path: path.join('transcripts', name),
        component: Transcript,
        context: { id, date: frontmatter.date },
      });
    }
  });

  // Markdown pages
  result.data.mdPages.nodes.forEach((node) => {
    const { id } = node.childMarkdownRemark;
    const { name } = node;
    createPage({
      path: name,
      component: CopyPage,
      context: { id },
    });
  });

  // Blog data
  const posts = result.data.blog.nodes;
  const postsPerPage = 10;
  const pageCount = Math.ceil(posts.length / postsPerPage);

  // Blog index pages
  Array.from({ length: pageCount }).forEach((_, i) => {
    const currentPage = i + 1;
    createPage({
      path: i === 0 ? '/blog/' : `/blog/${currentPage}`,
      component: BlogIndex,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pageCount,
        currentPage,
      },
    });
  });

  // Blog posts
  posts.forEach((node) => {
    const { id } = node.childMarkdownRemark;
    const { name, relativeDirectory } = node;
    // Build blog post path from a combination of directory and name.
    // If the filename is `index.md`, just use directory.
    const url = path.posix.join(relativeDirectory, name.replace('index', ''));
    createPage({
      path: `/blog/${url}`,
      component: CopyPage,
      context: { id },
    });
  });
};
