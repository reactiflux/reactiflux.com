#!/usr/bin/env node

/**
 * Transcript Converter
 *
 * Transforms raw transcript markdown into a publishing-ready format with
 * a table of contents and properly formatted timestamps.
 *
 * Usage:
 * cat | npm run process-tmir | pbcopy
 */

// Read from stdin
let rawTranscript = "";
process.stdin.on("data", (chunk) => {
  rawTranscript += chunk;
});

process.stdin.on("end", () => {
  const processedTranscript = processTranscript(rawTranscript);
  process.stdout.write(processedTranscript);
});

function processTranscript(input: string): string {
  // Split the input into lines for processing
  const lines = input.split("\n");

  // Extract section headers for table of contents
  const sectionHeaders = extractSectionHeaders(lines);
  const tableOfContents = generateTableOfContents(sectionHeaders);

  // Process the transcript lines
  const processedLines = lines.map((line) => {
    // Process section headers (remove timestamp from the header itself)
    if (line.startsWith("## ")) {
      return processSectionHeader(line);
    }

    // Process speaker lines and other content (move timestamp to end)
    return processContentLine(line);
  });

  // Combine the table of contents with the processed transcript
  return tableOfContents + "\n\n" + processedLines.join("\n");
}

interface SectionHeader {
  timestamp: string;
  title: string;
  anchorLink: string;
}

function extractSectionHeaders(lines: string[]): SectionHeader[] {
  const headers: SectionHeader[] = [];

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      // Extract timestamp and title
      const timestampMatch = line.match(/\[(\d{2}:\d{2}:\d{2})\]/);
      if (!timestampMatch) return;

      const timestamp = timestampMatch[1];

      // Extract the title (everything after the timestamp)
      let title = line.replace(/## \[\d{2}:\d{2}:\d{2}\] /, "");

      // For the anchor link generation, we need to handle colons which are common in titles
      // but need to be removed for proper anchor links

      // Create an anchor link from the title
      // Extract all text from the title, including text within markdown links
      // First, replace all markdown links [text](url) with just the text
      let plainTitle = title.replace(/\[(.*?)\]\(.*?\)/g, "$1");

      // Convert to lowercase, remove special chars, and replace spaces with hyphens
      let anchorLink = plainTitle
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      headers.push({
        timestamp,
        title,
        anchorLink,
      });
    }
  });

  return headers;
}

function generateTableOfContents(headers: SectionHeader[]): string {
  return headers
    .map(
      (header) =>
        `- [[${header.timestamp}](#${header.anchorLink})] ${header.title}`,
    )
    .join("\n");
}

function processSectionHeader(line: string): string {
  // Extract timestamp
  const timestampMatch = line.match(/\[(\d{2}:\d{2}:\d{2})\]/);
  if (!timestampMatch) return line;

  // Remove timestamp from the header
  return line.replace(/\[\d{2}:\d{2}:\d{2}\] /, "");
}

function processContentLine(line: string): string {
  // Skip empty lines or lines without timestamps
  if (!line.trim() || !line.includes("[") || !line.includes("]")) {
    return line;
  }

  // Extract timestamp
  const timestampMatch = line.match(/\[(\d{2}:\d{2}:\d{2})\]/);
  if (!timestampMatch) return line;

  const timestamp = timestampMatch[0];

  // Remove timestamp from the beginning
  const contentWithoutTimestamp = line.replace(timestamp + " ", "");

  // Add timestamp to the end
  return contentWithoutTimestamp + " " + timestamp;
}
