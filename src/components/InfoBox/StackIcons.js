import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import GatsbyIcon from "!svg-react-loader!../../images/svg-icons/gatsby.svg?name=GatsbyIcon";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const item = {
    name: "gatsby",
    url: "https://www.gatsbyjs.com/starters/greglobinski/gatsby-starter-personal-blog",
    comp: GatsbyIcon
  };

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>UI Template Provided by:</h5>

      <div className={classes.box}>
        <a className={classes.link} target="_blank" href="https://github.com/greglobinski">
          <h5>Greg Lobinski</h5>
        </a>
        <a
          href={item.url}
          key={item.name}
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <item.comp className={classes.svg} />
        </a>
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
