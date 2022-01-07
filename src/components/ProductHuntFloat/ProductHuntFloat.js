import React, { useEffect } from "react";
import injectSheet from "react-jss";
let styles = theme => ({
    phButton: {
    background: `linear-gradient(65deg,#da552f,#ea8e39)`,
    fontFamily: theme.typography.fontFamily,
    color: "#fff !important",
    display: "block",
    letterSpacing: 0,
    fontWeight: 700,
    lineHeight: "16px",
    fontSize: "14px",
    textTransform: "uppercase",
    textDecoration: "none!important",
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
    justifyContent: "center",
    padding: "16px 16px",
    textAlign: "center",
    whiteSpace: "nowrap",
    boxShadow: "0 8px 24px rgba(32,43,54,.12)",
    transition: "all .3s ease",
    marginTop: "16px",
    fontSize: "14px",
    "&:hover": {
      boxShadow: "0 6px 24px rgba(32,43,54,.4)"
    }
    },
    producthunt: {
      backgroundColor: "#fff",
      padding: "24px",
      boxShadow: "0 4px 16px rgba(16, 31, 59, 0.16)",
      zIndex: 10,
      fontSize: "16px",
      color: "#65638f",
      // fontFamily: "sans-serif",
      opacity: 1,
      transition: "all .3s ease",
      marginTop: "56px"
    },
    producthuntText: {
      margin: 0,
      // fontFamily: theme.typography.fontFamily,
    },
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      producthunt: {
        bottom: "0 !important",
        right: "0 !important",
        left: "0 !important",
        boxShadow: "0 -4px 16px rgba(16, 31, 59, 0.16) !important",
      },
    },
  })

let ProductHuntFloat = ({ options, classes }) => {
  const name = options.name;
  const url = options.url;
  const text = options.text
    ? options.text
    : `Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀`;
  const buttonText = options.buttonText ? options.buttonText : `${name} on Product Hunt`;
  const width = options.width ? options.width : "300px";
  const bottom = options.bottom ? options.bottom : "32px";
  const right = options.right ? options.right : "32px";
  const left = options.left ? options.left : "unset";
  const colorOne = options.colorOne ? options.colorOne : "#da552f";
  const colorTwo = options.colorTwo ? options.colorTwo : "#ea8e39";
  const saveInCookies = typeof options.saveInCookies === "boolean" ? options.saveInCookies : true;
  const target = options.target ? options.target : "_blank";
  const id = `product-hunt-${name.toLowerCase().replace(/[^a-zA-Z]+/g, "-")}`;
  
  return (
    <div className={classes.producthunt} id={`${id}`}>
      {" "}
      <p className={classes.producthuntText}>{`${text}`}</p>{" "}
      <a href={`${url}`} className={classes.phButton} target={`${target}`}>
        {`${buttonText}`}
      </a>
    </div>
  );
}; // ends here

export default injectSheet(styles)(ProductHuntFloat);
