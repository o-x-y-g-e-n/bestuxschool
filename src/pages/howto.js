import React from "react";
import PropTypes from "prop-types";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Link from "gatsby-link";

import injectSheet from "react-jss";

const styles = theme => ({
  band: {
    width: "90%",
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridGap: "20px",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      gridTemplateColumns: "1fr 1fr"
    }
   },
  
  card: {
    background: "white",
    textDecoration: "none !important",
    color: "#444 !important",
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    
    // sets up hover state
    position: "relative",
    top: 0,
    transition: "all .1s ease-in",
      
    "&:hover": {
      top: "-2px",
      boxShadow: "0 4px 5px rgba(0,0,0,0.2)",
    },
  },
    mediumArticle: {
      padding: "20px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    articleBody: {
      flex: 1,
      lineHeight: 1.4,
    },
    span: {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#999",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      margin: "2em 0 0 0",
    },
    thumb: {
      paddingBottom: "60%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
  itemOne: {
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      gridColumn: "1 / span 2",
    },
  }
});

const HowTo = props => {
  const { page ,classes} = props;
  const html = (page || {}).html;

  return (
     <Main>
      <Article>
        <PageHeader title="How To Guides 🕶" />
        <Content>
        <div className={classes.band}>
  <div className={classes.itemOne}>
    
    <a target="_blank" href="https://shivamgohel.medium.com/a-guide-to-the-best-ux-design-schools-and-how-to-choose-one-db706d24cb3a" className={classes.card}>
    <div className={classes.thumb} style={{backgroundImage: `url(https://i.ibb.co/XYH7NPx/pexels-virginia-magat-2131293.jpg)`}}></div>
    <article className="mediumArticle">
        <h1>A Guide To The Best UX Design Schools And How To Choose One</h1>
       </article>
    </a>
  </div>
  <div className={"item-2"}>
  <a target="_blank" href="https://www.bestuxschool.com/alumni-questionnaire-template/" className={classes.card}>
   <div className={classes.thumb} style={{backgroundImage: `url(https://i.ibb.co/rQsjpRP/pexels-burak-k-132340.jpg)`}}></div>
    <article className="mediumArticle">
        <h1>Questionnaire Template</h1>
        <p className={classes.articleBody}>Your goto guide to reach university alumni!</p>
      </article>
    </a>
  </div>
  <div className={"item-2"}>
  <a target="_blank" href="https://shivamgohel.medium.com/safe-moderate-and-ambitious-hci-ux-program-classification-list-361c3c503c96" className={classes.card}>
   <div className={classes.thumb} style={{backgroundImage: `url(https://i.ibb.co/MPxswM2/pexels-pixabay-159740.jpg)`}}></div>
    <article className="mediumArticle">
        <h1>Safe, Moderate and Ambitious HCI/UX program Classification List</h1>
        <p className={classes.articleBody}>The blog is to help UX Aspirants decide upon the university</p>
      </article>
    </a>
  </div>
  <div className={"item-2"}>
  <a target="_blank" href="https://shivamgohel.medium.com/courses-to-help-you-build-your-profile-for-ux-hci-graduate-programs-ef14065195cb" className={classes.card}>
   <div className={classes.thumb} style={{backgroundImage: `url(https://i.ibb.co/YRqcthc/pexels-jess-bailey-designs-768474.jpg)`}}></div>
    <article className="mediumArticle">
        <h1>Courses to help you build your profile for UX/HCI Graduate Programs</h1>
        <p className={classes.articleBody}>Take Courses and do side projects to boost your profile for Grad School.</p>
      
      </article>
    </a>
  </div>  
</div>
    </Content>
    </Article>
    </Main>
    
  );
};

HowTo.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired
};

export default injectSheet(styles)(HowTo);;
