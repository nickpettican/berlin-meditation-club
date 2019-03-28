import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../../components/LayoutBody";
import Typography from "../../components/Typography";
import styles from "./styles";

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Exclusive to Space Shack Coworking
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src="/static/themes/onepirate/productValues1.svg"
                  alt=""
                />
                <Typography variant="h6" className={classes.title}>
                  How to start - the basics
                </Typography>
                {/* <Typography variant="h5">{"Lorem"}</Typography> */}
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src="/static/themes/onepirate/productValues2.svg"
                  alt=""
                />
                <Typography variant="h6" className={classes.title}>
                  Learn different meditation types
                </Typography>
                {/* <Typography variant="h5">{"Ipsum."}</Typography> */}
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src="/static/themes/onepirate/productValues3.svg"
                  alt=""
                />
                <Typography variant="h6" className={classes.title}>
                  Practical, simple meditations for modern day life
                </Typography>
                {/* <Typography variant="h5">{"Vegi"}</Typography> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
