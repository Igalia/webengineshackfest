const MarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "html", "css", "pdf"]);

  eleventyConfig.addPassthroughCopy({"_assets/img": "img"});
  eleventyConfig.addPassthroughCopy({"_assets/css": "css"});
  eleventyConfig.addPassthroughCopy({"previous/": "/"});

  eleventyConfig.setLibrary("md", MarkdownIt({
    html: true,
    typographer: true,
    linkify: true
  }));

}
