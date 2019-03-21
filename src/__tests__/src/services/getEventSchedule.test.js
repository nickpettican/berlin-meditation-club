import sampleSheetEntries from "./sampleSheetEntries";
import { parseSheetData, parseArrayTableToEntries } from "../../../services/getEventSchedule";

const expectedRows = [
  ["Date", "Time", "Timestamp", "Topic", "Location"],
  ["2019-03-11", "8:45", "1552290300000", "What is Meditation?", "Space Shack Hangout Hub"],
  ["2019-03-15", "8:45", "1552635900000", "What is Meditation?", "Space Shack Hangout Hub"]
];

const expectedEntries = [
  {
    Date: "2019-03-11",
    Time: "8:45",
    Timestamp: 1552290300000,
    Topic: "What is Meditation?",
    Location: "Space Shack Hangout Hub"
  },
  {
    Date: "2019-03-15",
    Time: "8:45",
    Timestamp: 1552635900000,
    Topic: "What is Meditation?",
    Location: "Space Shack Hangout Hub"
  }
];

test("should return parsed table body", () => {
  let rows = parseSheetData(sampleSheetEntries);
  expect(rows).toEqual(expectedRows);
});

test("should return array of objects", () => {
  let entries = parseArrayTableToEntries(expectedRows);
  expect(entries).toEqual(expectedEntries);
});
