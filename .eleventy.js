const MarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "html", "css", "pdf"]);

  eleventyConfig.addPassthroughCopy({"_assets/img/favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({"_assets/img": "img"});
  eleventyConfig.addPassthroughCopy({"_assets/css": "css"});
  eleventyConfig.addPassthroughCopy({"previous/": "/"});

  eleventyConfig.setLibrary("md", MarkdownIt({
    html: true,
    typographer: true,
    linkify: true
  }));

  eleventyConfig.addCollection("breakoutAsc", (collection) =>
    collection.getFilteredByTag("breakout").sort((a, b) => {
      if (a.data.title > b.data.title) return 1;
      else if (a.data.title < b.data.title) return -1;
      else return 0;
    })
  );
}
