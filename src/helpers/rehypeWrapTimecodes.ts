import { visit } from "unist-util-visit";
import type { Root, Element, Text, ElementContent } from "hast";

/**
 * Rehype plugin that wraps timecode patterns in <code> tags.
 * Looks for list items that start with `[<timecode link>]` pattern
 * and wraps them in <code> tags for styling.
 *
 * Input:  <li>[<a href="#intro">00:00</a>] Intro</li>
 * Output: <li><code>[<a href="#intro">00:00</a>]</code> Intro</li>
 */
export default function rehypeWrapTimecodes() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      // Only process <li> elements
      if (node.tagName !== "li") {
        return;
      }

      // Check if first child is a text node starting with "["
      if (node.children.length < 3) {
        return;
      }

      const firstChild = node.children[0];
      if (firstChild.type !== "text" || !firstChild.value.startsWith("[")) {
        return;
      }

      // Check if second child is a link with a timecode pattern
      const secondChild = node.children[1];
      if (secondChild.type !== "element" || secondChild.tagName !== "a") {
        return;
      }

      // Check if the link text matches timecode pattern (HH:MM:SS or MM:SS)
      const linkText =
        secondChild.children[0]?.type === "text"
          ? secondChild.children[0].value
          : "";
      const timecodePattern = /^\d{1,2}:\d{2}(:\d{2})?$/;
      if (!timecodePattern.test(linkText)) {
        return;
      }

      // Check if third child is a text node starting with "]"
      const thirdChild = node.children[2];
      if (thirdChild.type !== "text" || !thirdChild.value.startsWith("]")) {
        return;
      }

      // Extract and modify the bracket text nodes
      const openingBracket: Text = {
        type: "text",
        value: "[",
      };

      const closingBracket: Text = {
        type: "text",
        value: "]",
      };

      // Update the original text nodes to remove the brackets
      const firstTextNode = firstChild as Text;
      firstTextNode.value = firstTextNode.value.slice(1); // Remove leading "["

      const thirdTextNode = thirdChild as Text;
      thirdTextNode.value = thirdTextNode.value.slice(1); // Remove leading "]"

      // Create the <code> wrapper with the timecode content
      const codeElement: Element = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [openingBracket, secondChild, closingBracket],
      };

      // Rebuild the children array
      const remainingContent = node.children.slice(2);
      node.children = [codeElement, ...remainingContent];
    });
  };
}
