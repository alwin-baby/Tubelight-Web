import React from "react";
import Heading from "../components/headerBar/Heading";
import SignUpButton from "../components/headerBar/SignUpButton";
import LoginPageBody from "../components/body/LoginPageBody";

function LoginPage() {
    return (
        <div>
            <nav className="nav1">
                <Heading />
                <SignUpButton />
            </nav>
            <div>
                <LoginPageBody />
            </div>
        </div>
    );
}

export default LoginPage;
