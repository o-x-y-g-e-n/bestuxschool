import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  },
  box: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor : "red",
    height: "100px",
    alignItems: "center"
  }
});

const PostAuthor = props => {
  const { classes, author } = props;

  return (
    <div className={classes.author}>
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: author.html }} />
    </div>
  );
};

PostAuthor.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostAuthor);
