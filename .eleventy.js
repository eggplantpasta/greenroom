import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";

import pluginFilters from "./_config/filters.js";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy({ "src/assets/images/favicon": "/" });
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTaskCheckbox));
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
        pluginFilters(eleventyConfig);
    return {
        pathPrefix: "/greenroom/",
        dir: {
            input: 'src',
            output: 'docs', // set as docs for github pages publishing
        },
      };
    }