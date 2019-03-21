import { combineReducers } from "redux";
import app from "./appReducer";
import eventsSchedule from "./eventsScheduleReducer";

export default combineReducers({
  app,
  eventsSchedule
});
