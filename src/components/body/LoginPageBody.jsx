import React from "react";

// import classes from "./LoginPageBody.module.css";
// eslint-disable-next-line
// import style from "./style.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginPageBody() {
    return (
        <div>
            <div>
                <p>Welcome !</p>
            </div>
            <div>
                <form>
                    <table>
                        <tr>
                            <input
                                type="text"
                                placeholder="Enter your user name"
                            ></input>
                        </tr>

                        <tr>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                            ></input>
                        </tr>
                        <div>
                            <input type="checkbox" name="checkbox"></input>
                            <p>Remember Me</p>
                        </div>
                        <div>
                            <p>
                                 <a href>Forgot password ?</a>
                            </p>
                        </div>
                        <button>Signup</button>
                    </table>
                </form>
            </div>
            <div>
                <p>
                    Don't have an account ? <a href>Login</a>{" "}
                </p>
            </div>
        </div>
    );
}

export default LoginPageBody;