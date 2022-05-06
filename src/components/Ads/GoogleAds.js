import React from "react";
import PropTypes from "prop-types";

const GoogleAds = ({ layout = "image", slot }) => {
  return (
    <AdSense.Google
      client="ca-pub-6122504498304460"
      slot="1981420027"
      style={{ display: "block",textAlign: "center"}}
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
};

export default GoogleAds;
