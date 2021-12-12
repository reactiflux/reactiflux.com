// TODO: this is gatsby-era code
// export default function Transcript({ data }) {
//   const { html, frontmatter, headings } = data.markdownRemark;

//   return (
//     <Layout title={frontmatter.title} sidebar={frontmatter.sidebar}>
//       {(setSidebar) => (
//         <>
//           <h1>{frontmatter.title}</h1>
//           {frontmatter.sidebar ? (
//             <FocusBoundary onChange={setSidebar}>
//               <nav>
//                 <ol>
//                   {headings
//                     .filter((heading) => heading.depth < 3)
//                     .map(({ value }) => (
//                       <li key={value}>
//                         <Link
//                           href={getAnchor(value)}
//                           onClick={() => {
//                             setSidebar(false);
//                             document
//                               .getElementById(getAnchor(value).replace("#", ""))
//                               .querySelector("a")
//                               .focus();
//                           }}
//                         >
//                           {value}
//                         </Link>
//                       </li>
//                     ))}
//                 </ol>
//               </nav>
//             </FocusBoundary>
//           ) : null}
//           <div
//             className="markdown"
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </>
//       )}
//     </Layout>
//   );
// }

// TODO: this is Next code but definitely broken
export async function getStaticProps({ params }) {
  const doc = getPostBySlug(params.slug);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      ...doc,
      content,
    },
  };
}
