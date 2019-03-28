import withRoot from "../../modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { withRouter } from "react-router-dom";
import LayoutBody from "../../components/LayoutBody";
import AppAppBar from "../../views/AppAppBar";
import AppFooter from "../../views/AppFooter";

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <LayoutBody margin marginBottom>
        <iframe
          title="Contact form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdCpNMmub0dQGd4BFjBupp0X2rlNhfv4yjq0T08DRN89P_aow/viewform?embedded=true"
          width="640"
          height="822"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
        </iframe>
      </LayoutBody>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRouter(withRoot(Privacy));
