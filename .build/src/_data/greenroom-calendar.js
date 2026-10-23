const ical = require("node-ical");
const path = require("node:path");

module.exports = function () {
  const filename = path.join(__dirname, "greenroom-calendar.ics");
  const calendar = ical.sync.parseFile(filename);

  return Object.values(calendar)
    .filter(event => event.type === "VEVENT")
    .sort((a, b) => a.start - b.start);
};