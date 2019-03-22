import axios from "axios";

const defaultReturn = { upcomingEvents: [], pastEvents: [] };

const getEventScheduleFromGoogleSheet = async (url) => {
  try {
    let res = await axios(url, { method: "GET" });
    if (res.data) {
      return res.data.feed.entry;
    } else {
      return [];
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return [];
  }
};

export const parseSheetData = (entries) => {
  let body = [];
  let row = [];
  let counter = 1;
  for (let entry of entries) {
    if (!entry.title.$t.match(counter)) {
      counter++;
      body.push(row.slice(0));
      row.length = 0;
      row.push(entry.content.$t);
    } else {
      row.push(entry.content.$t);
    }
  }
  body.push(row.slice(0));
  return body;
};

const convertToNumber = (str) => {
  try {
    let numberfied = Number(str);
    return numberfied || str;
  } catch (error) {
    return str;
  }
};

export const parseArrayTableToEntries = (table) => {
  let header = table.shift();
  return table.map((row) =>
    header.reduce((accumulator, currentValue, currentIndex) => {
      accumulator[currentValue] = convertToNumber(row[currentIndex]);
      return accumulator;
    }, {})
  );
};

const splitEventsByTime = (entries) => {
  try {
    let timestampNow = new Date().getTime();
    return {
      upcomingEvents: entries.filter((entry) => entry.Timestamp > timestampNow),
      pastEvents: entries.filter((entry) => entry.Timestamp < timestampNow)
    };
  } catch (error) {
    return defaultReturn;
  }
};

const getEventSchedule = async (
  url = "https://spreadsheets.google.com/feeds/cells/1PpFJ6ybuzN7VO3SLK-VxhwITiSUIvkLL6lqGDVZYPDA/1/public/full?alt=json"
) => {
  let sheetData = await getEventScheduleFromGoogleSheet(url);
  if (sheetData.length) {
    let table = await parseSheetData(sheetData);
    let entries = await parseArrayTableToEntries(table);
    let { upcomingEvents, pastEvents } = await splitEventsByTime(entries);
    return { upcomingEvents, pastEvents };
  } else {
    return defaultReturn;
  }
};

export default getEventSchedule;
