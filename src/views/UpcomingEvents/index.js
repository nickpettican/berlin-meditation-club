import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import Loading from "../../components/Loading";
import EventsGrid from "../../components/EventsGrid";
import getEventSchedule from "../../services/getEventSchedule";
import styles from "./styles";

const initialState = {
  status: "loading",
  upcomingEvents: null
};

const getEvents = () => {
  const [state, setstate] = useState(initialState);
  const getUpcomingEvents = async () => {
    try {
      const { upcomingEvents } = await getEventSchedule();
      setstate({ status: "success", upcomingEvents: upcomingEvents.slice(0, 3) });
    } catch (error) {
      setstate({ status: "error" });
    }
  };
  useEffect(() => {
    getUpcomingEvents();
  }, []);
  return state;
};

const UpcomingEvents = ({ classes }) => {
  const { status, upcomingEvents } = getEvents();
  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Upcoming sessions
        </Typography>
        {stateToJsx[status](upcomingEvents)}
      </LayoutBody>
    </section>
  );
};

const ErrorMessage = () => <p>Oops</p>;

const stateToJsx = {
  loading: () => <Loading />,
  success: (upcomingEvents) => <EventsGrid events={upcomingEvents} />,
  error: () => <ErrorMessage />
};

UpcomingEvents.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpcomingEvents);
