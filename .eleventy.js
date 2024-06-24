module.exports = function (eleventyConfig) {
    return {
        pathPrefix: "/greenroom/",
        dir: {
            input: 'src',
            output: 'docs', // set as docs for github pages publishing
        },
      };
  };