import withRoot from "../../modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { withRouter } from "react-router-dom";
import AppFooter from "../../views/AppFooter";
import ProductHero from "../../views/ProductHero";
import ProductValues from "../../views/ProductValues";
import ProductSmokingHero from "../../views/ProductSmokingHero";
import AppAppBar from "../../views/AppAppBar";
import UpcomingEvents from "../../views/UpcomingEvents";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <UpcomingEvents />
      <ProductValues />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRouter(withRoot(Index));
