import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AmazonAd2 = () => {
  return (
    <div>
    <Helmet>
        <script type="text/javascript">
        amzn_assoc_placement = "adunit0";
        amzn_assoc_tracking_id = "shigohel-20";
        amzn_assoc_ad_mode = "manual";
        amzn_assoc_ad_type = "smart";
        amzn_assoc_marketplace = "amazon";
        amzn_assoc_region = "US";
        amzn_assoc_asins = "0123848695,0128023082,B00CEKR872,1933820292,0123851300,0124157815,B07LGGNWJC,1937557103,0470185481,1592537561";
        amzn_assoc_linkid = "b987faa717172648f249f883d9e0477f";
        amzn_assoc_title = "UX Research Books Recommendations";
        amzn_assoc_search_bar = "false";
        </script>
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
        </Helmet>
      <div className="advertisement">
        <div id="amzn_assoc_ad_div_adunit0_1"></div>
        <div id="amzn_assoc_ad_div_adunit0_0"></div>
      </div>
    </div>
  );
};

export default AmazonAd2;
