import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import EventGridCard from "../EventGridCard";

class EventsGrid extends Component {
  render() {
    let { classes, events } = this.props;

    return (
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {events.map((data, index) => (
              <EventGridCard {...data} key={index} />
            ))}
          </Grid>
        </div>
      </main>
    );
  }
}

EventsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsGrid);
