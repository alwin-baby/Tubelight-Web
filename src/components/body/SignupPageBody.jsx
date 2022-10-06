import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import style from "./style.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import usePasswordToggle1 from "./hooks/usePasswordToggle1";
import usePasswordToggle2 from "./hooks/usePasswordToggle2";

function SignupPageBody() {
  const [PasswordInputType1,Icon1] = usePasswordToggle1();
  const [PasswordInputType2,Icon2] = usePasswordToggle2();

  

  return (
    <form className="fbox">
      <div className="welcomeContainer">
        <p className="welcome">Welcome !</p>
      </div>
      <table className="tbox">
        <tbody>
          <tr>
            <td>
              <label className="fname">Name</label>
              <br></br>
              <br></br>
              <input
                type="text"
                placeholder="Enter your full name"
                className="iname"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
              <label className="fname">Email</label>
              <br></br> <br></br>
              <input
                type="text"
                placeholder="Enter your email"
                className="iname"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
              <label className="fname">UserName</label>
              <br></br>
              <br></br>
              <input
                type="text"
                placeholder="Enter your user name"
                className="iname"
              ></input>
            </td>
          </tr>

          <tr className="trpass">
            <td>
              <br></br>
              <label className="fname">Password</label>
              <br></br>
              <br></br>
              <input
                type={PasswordInputType1}
                placeholder="Enter your Password"
                className="iname"
              ></input>
              <span className="toggleicon">{Icon1}</span>
            </td>
          </tr>

          <tr className="trconfirmpass">
            <td>
              <br></br>
              <label className="fname">Confirm Password</label>
              <br></br>
              <br></br>
              <input
                type={PasswordInputType2}
                placeholder="Confrim your Password"
                className="iname"
              ></input>
              <span className="toggleicon">{Icon2}</span>
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
              <br></br>
              <button className="signup">Signup</button>
              <br></br>
            </td>
          </tr>

          <tr>
            <td>
              <p className="Already">
                Already have an account ?{" "}
                <Link to="/login" className="login" href>
                  Login
                </Link>{" "}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default SignupPageBody;
