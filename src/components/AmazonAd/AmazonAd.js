import React from "react";

let AmazonAd = () => {
  let amazoneScript = () => {
    return `<div>
                <script type="text/javascript">
                amzn_assoc_placement = "adunit0";
                amzn_assoc_search_bar = "true";
                amzn_assoc_tracking_id = "shigohel-20";
                amzn_assoc_ad_mode = "manual";
                amzn_assoc_ad_type = "smart";
                amzn_assoc_marketplace = "amazon";
                amzn_assoc_region = "US";
                amzn_assoc_title = "UX Books Recommendations";
                amzn_assoc_asins = "1592535879,0465050654,1591846447,0321965515";
                amzn_assoc_linkid = "b987faa717172648f249f883d9e0477f";
    </script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
            </div>`;
  };

  return (
    <div className="advertisement">
      <div dangerouslySetInnerHTML={{ __html: amazoneScript() }}></div>
    </div>
  );
};

export default AmazonAd;
