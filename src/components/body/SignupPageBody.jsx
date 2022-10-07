import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import style from "./style.css";
import UserPool from "../body/userPool/UserPool";
// import {
//         CognitoUserPool,
//         CognitoUserAttribute,
//         CognitoUser,
// } from 'amazon-cognito-identity-js';



import usePasswordToggle1 from "./hooks/usePasswordToggle1";
import usePasswordToggle2 from "./hooks/usePasswordToggle2";

function SignupPageBody() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let AmazonCognitoIdentity = require('amazon-cognito-identity-js');
  //let CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

  const validator = (e) => {
    const isEmailValid = emailValidation(e);
    const isPassValid = passwordValidation(e);
    const isCPassValid =  confirmPasswordValidation(e);

    let attributeList = [];

    let dataEmail = {
      Name: 'email',
      Value: email,
    };
    

    // let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    let attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    if(isEmailValid && isPassValid && isCPassValid){
      UserPool.signUp(name, password, attributeList,null , (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      });
    }
    
  };
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const emailRegEx = // eslint-disable-next-line
    /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  const passwordRegEx = // eslint-disable-next-line
    /^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@\/&_*#?~!\$\\]).*$/;

  const emailValidation = (e) => {
    if (emailRegEx.test(email) === false && email !== "") {
      e.preventDefault();
      alert("Please enter a valid email.");
      return false;
    
    }
    return true
  };

  const passwordValidation = (e) => {
    if (passwordRegEx.test(password) === false && password !== "") {
      e.preventDefault();
      alert(
        "Password must be 8 to 20 characters long and should contain atleast one uppercase character, one lowercase character, one special character ( @ / & _ * # ? ~ ! $ \\ ) and a number."
      );
      return false
    }
    return true
  };

  const confirmPasswordValidation = (e) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Passwords does not match.");
      return false
    }
    return true
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  // toggle eye change individual inputs
  const [PasswordInputType1, Icon1] = usePasswordToggle1();
  const [PasswordInputType2, Icon2] = usePasswordToggle2();

  return (
    <div className="fbox" >
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
                value={name}
                required
                onChange={handleNameChange}
                type="text"
                placeholder="Enter your full name"
                className="iname"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <br></br>
              <label className="email">Email</label>
              <br></br> <br></br>
              <input
                value={email}
                required
                onChange={handleEmailChange}
                type="text"
                placeholder="Enter your email"
                className="iname"
              ></input>
            </td>
          </tr>

          <tr className="trpass">
            <td>
              <br></br>
              <label className="pass">Password</label>
              <br></br>
              <br></br>
              <input
                value={password}
                required
                onChange={handlePasswordChange}
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
              <label className="confirmpass">Confirm Password</label>
              <br></br>
              <br></br>
              <input
                value={confirmPassword}
                required
                onChange={handleConfirmPasswordChange}
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
              <button onClick={validator} type="submit" className="signup">
                Signup
              </button>
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
    </div>
  );
 }

export default SignupPageBody;
