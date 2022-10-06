import React from "react";
import { Link } from "react-router-dom";

import usePasswordToggle1 from "./hooks/usePasswordToggle1";

import classes from "./LoginPageBody.module.css";
// eslint-disable-next-line
// import style from "./style.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginPageBody() {

    const [inputType,icon] = usePasswordToggle1()

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
                                <td className={classes.toggleTd} colSpan="3">
                                    <input
                                        type={inputType}
                                        placeholder="Enter your Password"
                                    ></input>
                                    <span className={classes.togglePasswordIcon}>{icon}</span>
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
                                    <p className={classes.rememberMe}>
                                        Remember Me
                                    </p>
                                </td>
                                <td className={classes.tdContainer}>
                                    <p className={classes.forgotPassword}>
                                        <>Forgot password ?</>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button>Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div className={classes.registerContainer}>
                <p className={classes.footerText}>
                    Don't have an account ?{" "}
                    <Link className={classes.register} to="/signup">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPageBody;
