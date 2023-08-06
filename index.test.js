const highlightHTMLContent = require("./index.js");

// Jest unit tests
describe("highlightHTMLContent", () => {
  it("should handle no highlights", () => {
    const htmlContent = "<p><span>This is a test</span></p>";
    const plainText = "No highlights here";
    const plainTextPositions = [];

    const result = highlightHTMLContent(
      htmlContent,
      plainText,
      plainTextPositions
    );
    expect(result).toEqual(htmlContent);
  });
});
