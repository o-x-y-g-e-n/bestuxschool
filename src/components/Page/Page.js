import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";

const Page = props => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      {/* <GoogleAds slot="7323753803" layout='inArticle'></GoogleAds> */}
      <Content html={html} />
      {/* <GoogleAds slot="5978347110" layout="image"></GoogleAds> */}
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
