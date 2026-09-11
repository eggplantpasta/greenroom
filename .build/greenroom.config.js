import buildAwesomeConfig from "@buildawesome.one/config/buildawesome.config.js";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";

export default async function ($config) {
  await buildAwesomeConfig($config);

  $config.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItTaskCheckbox);
  });
  $config.addPassthroughCopy({
    ".build/_public/greenroom.css": "greenroom.css",
  });
}