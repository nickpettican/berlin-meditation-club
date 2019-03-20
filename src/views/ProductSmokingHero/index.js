import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import styles from "./styles";

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section">
      <Button className={classes.button}>
        <Link
          underline="none"
          color="inherit"
          className={classes.title}
          href="https://github.com/nickpettican/berlin-meditation-club"
        >
          <Typography variant="h4" component="span">
            This homepage is still in development
          </Typography>
        </Link>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        If you would like to contribute, you are very welcome to!
      </Typography>
      <img src="/img/dharmabot-logo-round.png" className={classes.buoy} alt="dharmabot-logo" />
    </LayoutBody>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductSmokingHero);
