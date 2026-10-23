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

    const monthFormat = new Intl.DateTimeFormat("en-AU", {
      month: "long",
      year: "numeric",
      timeZone: "Australia/Perth",
    });

    const dayFormat = new Intl.DateTimeFormat("en-AU", {
      day: "numeric",
      timeZone: "Australia/Perth",
    });

    const weekdayFormat = new Intl.DateTimeFormat("en-AU", {
      weekday: "short",
      timeZone: "Australia/Perth",
    });

    const timeFormat = new Intl.DateTimeFormat("en-AU", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Australia/Perth",
    });

    return Object.values(calendar)
      .filter(event => event.type === "VEVENT")
      .sort((a, b) => a.start - b.start)
      .map(event => ({
        ...event,
        monthHeading: monthFormat.format(event.start),
        day: dayFormat.format(event.start),
        weekday: weekdayFormat.format(event.start),
        time: event.datetype === "date"
          ? ""
          : timeFormat.format(event.start),
      }));
  });

}