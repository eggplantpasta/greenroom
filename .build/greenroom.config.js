
import buildAwesomeConfig from "@buildawesome.one/config/buildawesome.config.js";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import loadGreenroomCalendar from "./src/calendar/greenroomCalendar.js";

export default async function ($config) {
  await buildAwesomeConfig($config);

  $config.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItTaskCheckbox);
  });

  $config.addPassthroughCopy({
    ".build/_public/greenroom.css": "greenroom.css",
  });

  $config.addGlobalData("greenroomCalendar", loadGreenroomCalendar);
}
