import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import ProductHeroLayout from "./layout";
import styles, { backgroundImage } from "./styles";

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <br />
      <Typography color="inherit" align="center" variant="h2" marked="center" component="h1">
        Learn how to meditate
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classNames({ [classes.h5]: true, [classes.subHeading]: true })}
      >
        What is your goal? The desire to develop relaxation, happiness, emotional intelligence, love
        and compassion? Or the search for more meaning and satisfaction in life? Meditation and
        Buddhist philosophy can give valuable and effective insights into these topics.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        className={classes.button}
        component={(linkProps) => (
          <Link {...linkProps} href="https://m.me/dharmabot" variant="button" />
        )}
      >
        Sign up
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Learn more
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
