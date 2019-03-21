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
          style={{ width: "100%", margin: "auto" }}
          title="Contact form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScNlYaFAqZCRXRaYbbvsTLqyfaiT3Ndp9-k26ipixK_y1NUAw/viewform?embedded=true"
          width="640"
          height="962"
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
