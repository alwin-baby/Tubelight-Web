import React from "react";
import { Link } from "react-router-dom";

import classes from "./LoginPageBody.module.css";
// eslint-disable-next-line
// import style from "./style.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginPageBody() {
    return (
        <div className={classes.bodyContainer}>
            <div className={classes.welcomeContainer}>
                <p className={classes.welcome}>Welcome !</p>
            </div>
            <div className={classes.formContainer}>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="3">
                                    <p className={classes.userName}>
                                        User name
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="3">
                                    <input
                                        type="text"
                                        placeholder="Enter your user name"
                                    ></input>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="3">
                                    <p className={classes.password}>Password</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="3">
                                    <input
                                        type="password"
                                        placeholder="Enter your Password"
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.checkboxContainer}>
                                    <input
                                        className={classes.checkbox}
                                        type="checkbox"
                                        name="checkbox"
                                    ></input>
                                </td>
                                <td>
                                    <p className={classes.rememberMe}>Remember Me</p>
                                </td>
                                <td className={classes.tdContainer}>
                                    <p className={classes.forgotPassword}>
                                        <>Forgot password ?</>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div className={classes.registerContainer}>
                <p className={classes.footerText}>
                    Don't have an account ? <Link className={classes.register} to="/signup">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPageBody;
