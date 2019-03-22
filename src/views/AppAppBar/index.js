import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "../../components/AppBar";
import Toolbar from "../../components/Toolbar";
import Typography from "../../components/Typography";
import styles from "./styles";

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            style={{ textDecoration: "none", color: "#f6fafa" }}
          >
            <Typography variant="h6" underline="none" color="inherit" className={classes.title}>
              {"Learn meditation"}
            </Typography>
          </NavLink>
          <div className={classes.right}>
            <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              style={{ textDecoration: "none", color: "#f6fafa" }}
            >
              <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"Contact"}
              </Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
