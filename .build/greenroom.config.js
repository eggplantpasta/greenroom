import buildAwesomeConfig from "@buildawesome.one/config/buildawesome.config.js";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import ical from "node-ical";
import { fileURLToPath } from "node:url";

export default async function ($config) {
  await buildAwesomeConfig($config);

  $config.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItTaskCheckbox);
  });
  $config.addPassthroughCopy({
    ".build/_public/greenroom.css": "greenroom.css",
  });
  $config.addGlobalData("greenroomCalendar", () => {
    const filename = fileURLToPath(
      new URL("./src/_data/greenroom-calendar.ics", import.meta.url)
    );

    const calendar = ical.sync.parseFile(filename);

    return Object.values(calendar)
      .filter(event => event.type === "VEVENT")
      .sort((a, b) => a.start - b.start);
  });
}