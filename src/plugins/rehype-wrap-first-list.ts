import { visit } from "unist-util-visit";
import type { Root, Element, ElementContent } from "hast";

/**
 * Rehype plugin that makes nested list items individually collapsible.
 * For each <li> that contains a nested <ul>, wraps the content in
 * <details><summary> to enable collapse/expand functionality.
 */
export default function rehypeWrapFirstList() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      // Only process <li> elements
      if (node.tagName !== "li") {
        return;
      }

      // Check if this <li> has a nested <ul> child
      const nestedUlIndex = node.children.findIndex(
        (child): child is Element =>
          child.type === "element" && child.tagName === "ul",
      );

      // If no nested <ul>, nothing to do
      if (nestedUlIndex === -1) {
        return;
      }

      // Split children into summary content (before ul) and nested ul
      const summaryContent = node.children.slice(0, nestedUlIndex);
      const nestedUl = node.children[nestedUlIndex] as Element;

      // Only wrap if there's content to put in the summary
      if (summaryContent.length === 0) {
        return;
      }

      // Create the summary element with the content before the nested ul
      const summary: Element = {
        type: "element",
        tagName: "summary",
        properties: {},
        children: summaryContent as ElementContent[],
      };

      // Create the details element
      const details: Element = {
        type: "element",
        tagName: "details",
        properties: { open: true }, // Open by default
        children: [summary, nestedUl],
      };

      // Replace the <li>'s children with just the details element
      node.children = [details];
    });
  };
}
