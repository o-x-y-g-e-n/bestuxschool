import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";
import GoogleAds from '../Ads'
const Page = props => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <GoogleAds />
      <Content html={html} />
      <GoogleAds />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
