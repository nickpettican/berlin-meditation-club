import {
  REQUEST_EVENTS_SCHEDULE,
  REQUEST_EVENTS_SCHEDULE_FAILURE,
  REQUEST_EVENTS_SCHEDULE_SUCCESS
} from "./types";
import getEventSchedule from "../services/getEventSchedule";

export const requestEventSchedule = () => async (dispatch) => {
  dispatch({
    type: REQUEST_EVENTS_SCHEDULE
  });
  let { upcomingEvents, pastEvents } = await getEventSchedule();
  if (upcomingEvents.length && pastEvents.length) {
    dispatch({
      type: REQUEST_EVENTS_SCHEDULE_SUCCESS,
      payload: { upcomingEvents, pastEvents }
    });
  } else {
    dispatch({
      type: REQUEST_EVENTS_SCHEDULE_FAILURE
    });
  }
};
