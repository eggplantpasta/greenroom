import buildAwesomeConfig from "@buildawesome.one/config";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import tableCheckbox from 'markdown-it-table-checkbox';
import loadGreenroomCalendar from "./src/calendar/greenroomCalendar.js";

export default async function ($config) {
  await buildAwesomeConfig($config);

  $config.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItTaskCheckbox);
    mdLib.use(tableCheckbox);
  });

  $config.addGlobalData("greenroomCalendar", loadGreenroomCalendar);
}
