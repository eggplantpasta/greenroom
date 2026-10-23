
import ical from "node-ical";
import { fileURLToPath } from "node:url";

export default function loadGreenroomCalendar() {
  const filename = fileURLToPath(
    new URL("./greenroom-calendar.ics", import.meta.url)
  );

  const calendar = ical.sync.parseFile(filename);

  const timezone = "Australia/Perth";

  const monthFormat = new Intl.DateTimeFormat("en-AU", {
    month: "long",
    year: "numeric",
    timeZone: timezone,
  });

  const dayFormat = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    timeZone: timezone,
  });

  const weekdayFormat = new Intl.DateTimeFormat("en-AU", {
    weekday: "short",
    timeZone: timezone,
  });

  const timeFormat = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
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
}
