import React from "react";
import BreakingNews from "./BreakingNews";
import Headlines from "./Headlines";
import classes from "./NewsAndLiveMatches.module.css";

const NewsAndLiveMatches = () => {
  return (
    <div className={classes.container}>
      <div className={classes.breaking}>
        <BreakingNews />
      </div>
      <div className={classes.headlines}>
        <Headlines />
      </div>
      <div className={classes.featuresMatches}></div>
      <div className={classes.liveTable}></div>
      <div className={classes.adSection}></div>
    </div>
  );
};

export default NewsAndLiveMatches;
