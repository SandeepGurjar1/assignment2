function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let highlightedContent = htmlContent;
  let offset = 0;

  for (const position of plainTextPositions) {
    const start = position.start + offset;
    const end = position.end + offset;

    highlightedContent =
      highlightedContent.slice(0, start) +
      "<mark>" +
      highlightedContent.slice(start, end) +
      "</mark>" +
      highlightedContent.slice(end);

    offset += 13;
  }

  return highlightedContent;
}

module.exports = highlightHTMLContent;
