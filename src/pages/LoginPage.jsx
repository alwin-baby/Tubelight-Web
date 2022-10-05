import React from "react";
import Heading from "../components/headerBar/Heading";
import SignUpButton from "../components/headerBar/SignUpButton";
import LoginPageBody from "../components/body/LoginPageBody";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <form>
            <nav className="nav1">
                <Heading />
                <Link to="/signup">
                    <SignUpButton />
                </Link>
            </nav>
            <div>
                <LoginPageBody />
            </div>
        </form>
    );
}

export default LoginPage;
