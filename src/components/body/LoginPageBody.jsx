import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserPool from "./userPool/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

import usePasswordToggle1 from "./hooks/usePasswordToggle1";

import classes from "./LoginPageBody.module.css";

function LoginPageBody() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("Success: ", data);
            },
            onFailure: (err) => {
                console.error("Failure: ", err);
            },
        });
    };

    const [inputType, icon] = usePasswordToggle1();

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
                                    <p className={classes.userName}>Email</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="3">
                                    <input
                                        required
                                        value={email}
                                        onChange={handleEmail}
                                        type="email"
                                        placeholder="Enter your E-mail Id"
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
                                        required
                                        value={password}
                                        onChange={handlePassword}
                                        type={inputType}
                                        placeholder="Enter your Password"
                                    ></input>
                                    <span
                                        className={classes.togglePasswordIcon}
                                    >
                                        {icon}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3" className={classes.tdContainer}>
                                    <p className={classes.forgotPassword}>
                                        <>Forgot password ?</>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button onClick={onSubmit} type="submit">
                                        Login
                                    </button>
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
