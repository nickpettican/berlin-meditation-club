import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import AppBar from "../../components/AppBar";
import Toolbar from "../../components/Toolbar";
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
            <Link variant="h6" underline="none" color="inherit" className={classes.title} href="/">
              {"Learn how to meditate"}
            </Link>
          </NavLink>
          <div className={classes.right}>
            <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              style={{ textDecoration: "none", color: "#f6fafa" }}
            >
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="#"
              >
                {"Contact"}
              </Link>
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
