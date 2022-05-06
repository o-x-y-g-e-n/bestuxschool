import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import config from "../../../content/meta/config";

import GithubIcon from "!svg-react-loader!../../images/svg-icons/github.svg?name=GithubIcon";
import EmailIcon from "!svg-react-loader!../../images/svg-icons/email.svg?name=EmailIcon";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "40px",
    height: "40px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s"
  }
});

const SocialIcons = props => {
  const { classes } = props;
  const items = config.authorSocialLinks;
  const icons = {
    github: GithubIcon,
    email: EmailIcon
  };

  return (
    <div className={classes.social}>
      {items.map(item => {
        const Icon = icons[item.name];
        return (
          <a
            href={item.url}
            key={item.name}
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            <Icon className={classes.svg} />
          </a>
        );
      })}
    </div>
  );
};

SocialIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SocialIcons);
