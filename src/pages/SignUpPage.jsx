import React from "react";
import Heading from "../components/headerBar/Heading";
import LoginButton from "../components/headerBar/LoginButton";
import SignupPageBody from "../components/body/SignupPageBody";
import { Link } from 'react-router-dom'

function signUpPage() {
    return (
        <form>
            <nav className="nav1">
                <Heading />
                <Link to="/login">
                    <LoginButton />
                </Link>
            </nav>
            <SignupPageBody />
        </form>
    );
}

export default signUpPage;
