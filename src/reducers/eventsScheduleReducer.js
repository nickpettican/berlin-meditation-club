import {
  REQUEST_EVENTS_SCHEDULE,
  REQUEST_EVENTS_SCHEDULE_FAILURE,
  REQUEST_EVENTS_SCHEDULE_SUCCESS
} from "../actions/types";

const initialState = {
  isLoading: true,
  upcomingEvents: [],
  pastEvents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EVENTS_SCHEDULE:
      return { ...state, isLoading: true };

    case REQUEST_EVENTS_SCHEDULE_SUCCESS:
      let { upcomingEvents, pastEvents } = action.payload;
      return { ...state, isLoading: false, upcomingEvents, pastEvents };

    case REQUEST_EVENTS_SCHEDULE_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
