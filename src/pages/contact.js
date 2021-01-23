import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";
import contact from '../images/jpg/contact.jpg'
const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        {/* <GoogleAds slot="5978347110" layout="image"></GoogleAds> */}
        <Content>
          <b>Find any errors / corrections?</b>
          <br/>
          Feel free to contact me by email: <Obfuscate email={config.contactEmail} />
        </Content>
        {/* <GoogleAds slot="5978347110" layout="image"></GoogleAds> */}
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
