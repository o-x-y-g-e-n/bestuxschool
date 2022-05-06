import React from "react";
import PropTypes from "prop-types";
import AdSense from 'react-adsense';

const GoogleAds = ({ layout = "image", slot }) => {
  return (
    <AdSense.Google
      client="ca-pub-6122504498304460"
      slot="1981420027"
      layout="in-article"
      style={{ display: "block",textAlign: "center"}}
      format="fluid"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
};

export default GoogleAds;
