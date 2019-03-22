import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import styles from "./styles";
import { TableBody, TableRow, TableCell, Table } from "@material-ui/core";
import { CalendarToday, AccessTime, LocationOn } from "@material-ui/icons";

const convertToGoogleMapsLink = (address) => {
  try {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURI(
      address.split(" ").join("+")
    )}`;
  } catch (error) {
    return "https://www.google.com/maps";
  }
};

const EventGridCard = ({
  classes,
  Date,
  Time,
  Timestamp,
  Topic,
  Location,
  name,
  PhotoUrl = "/img/morning-meditation-default-picture.png"
}) => {
  let eventTimeStart = moment(Timestamp);
  let eventTimeEnd = moment(Timestamp + 45 * 60 * 60 * 1000);
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={name}
          className={classes.media}
          height="150"
          image={PhotoUrl}
          title={name}
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h6" component="h2">
            {Topic}
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left" className={classes.tableIcon}>
                  <CalendarToday />
                </TableCell>
                <TableCell>
                  <Typography align="left" gutterBottom component="p" className={classes.h6}>
                    {`${eventTimeStart.format("MMM Do YYYY")}, ${eventTimeStart.fromNow()}`}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className={classes.tableIcon}>
                  <AccessTime />
                </TableCell>
                <TableCell>
                  <Typography align="left" gutterBottom component="p" className={classes.h6Bold}>
                    {`${eventTimeStart.format("H:mm")} - ${eventTimeEnd.format("H:mm")}`}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className={classes.tableIcon}>
                  <LocationOn />
                </TableCell>
                <TableCell>
                  <Typography align="left" gutterBottom component="p">
                    <a className={classes.locationLink} href={convertToGoogleMapsLink(Location)}>
                      {Location}
                    </a>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
};

EventGridCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGridCard);
