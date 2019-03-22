import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  progress: {
    margin: "auto",
    marginTop: "10%",
    marginBottom: "10%",
    color: theme.palette.primary.main
  }
});

const CircularIndeterminate = (props) => {
  const { classes } = props;
  return <CircularProgress className={classes.progress} size={100} />;
};

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
