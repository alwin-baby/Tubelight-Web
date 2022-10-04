import React from "react";
import Heading from "../components/headerBar/Heading";
import Login from "../components/headerBar/Login";

import classes from "./LandingPage.module.css";

function LandingPage() {
    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.logoDiv}>
                    <Heading />
                </div>
                <Login />
            </nav>
            <div className={classes.writeupDiv}>
                <p className={classes.writeup1}>
                    Watch everywhere and anywhere
                </p>
                <p className={classes.writeup2}>
                    Unlimited movies, TV <br></br>shows, and more
                </p>
                <p className={classes.writeup3}>
                    Best video quality at 4k with HDR. Enjoy simultaneously on 4
                    <br></br>
                    screens. Watch on your TV, computer, phone and tablet.
                    Cancel <br></br> anytime. Includes free trial for first 14
                    days
                </p>
                <button className={classes.button}>GET STARTED</button>
                <p className={classes.writeup4}>
                    Ready to watch? Click get started to view our plans
                </p>
            </div>
        </div>
    );
}

export default LandingPage;
