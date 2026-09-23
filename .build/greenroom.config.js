import buildAwesomeConfig from "@buildawesome.one/config";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";

export default async function ($config) {
  await buildAwesomeConfig($config);

  $config.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItTaskCheckbox);
  });
}
