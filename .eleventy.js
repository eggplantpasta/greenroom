const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    return {
        pathPrefix: "/greenroom/",
        dir: {
            input: 'src',
            output: 'docs', // set as docs for github pages publishing
        },
      };
  };