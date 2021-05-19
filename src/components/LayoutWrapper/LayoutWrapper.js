import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import CloseIcon from "!svg-react-loader!../../images/svg-icons/close.svg?name=CloseIcon";
import Link from "gatsby-link";
const styles = theme => ({
  wrapper: {
    padding: "1px",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    overflow: "hidden",
    "@media print": {
      position: "relative",
      overflow: "visible"
    }
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  annContent: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px"
  },
  svg: {
    width: "22px",
    height: "22px"
  },
  icon: {
    marginLeft: "auto",
    cursor: "pointer"
  },
  annText: {
    textAlign: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.S}px)`]: {
      fontSize: `${theme.main.fonts.content.sizeS}em`
    },
    fontSize: `.7em`,
    letterSpacing: ".2em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 500
  }
});

const LayoutWrapper = props => {
  const { classes, children } = props;
  const [show, setShow] = React.useState(true);

  return (
    <div>
      {show && (
        <div
          className={classes.annContent}
          style={{ background: "#f7cde0", zIndex: 10000, color: "black" }}
        >
          <div className={classes.annText}>🔥 Added 3 new courses & <Link to={`/alumni-questionnaire-template/`}>Questionnaire Template</Link> 🔥</div>
          <div className={classes.icon}>
            {" "}
            <a
              key={"closeButton"}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShow(false)}
            >
              <CloseIcon className={classes.svg} />
            </a>
          </div>
        </div>
      )}
      <div className={classes.wrapper} style={{ top: show ? "60px" : 0 }}>
        {children}
      </div>
    </div>
  );
};

LayoutWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default injectSheet(styles)(LayoutWrapper);
