const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownItTaskCheckbox = require("markdown-it-task-checkbox");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy({ "src/assets/images/favicon": "/" });
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTaskCheckbox));
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    return {
        pathPrefix: "/greenroom/",
        dir: {
            input: 'src',
            output: 'docs', // set as docs for github pages publishing
        },
      };
  };