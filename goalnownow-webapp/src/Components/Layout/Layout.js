import React from "react";
import Header from "../../Containers/Header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <div></div>
        <div>{props.children}</div>
        <div></div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Layout;
