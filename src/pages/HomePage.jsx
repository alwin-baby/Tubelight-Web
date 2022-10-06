import React from "react";
import Heading from "../components/headerBar/Heading";
import classes from "./HomePage.module.css"

function HomePage() {
  return (
    <div>
      <nav className="nav1">
        <Heading />
      </nav>
      <h1 className={classes.para}>This is the home page </h1>
    </div>
  );
}

export default HomePage;
