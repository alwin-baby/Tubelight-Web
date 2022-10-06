import React from "react";

import { Switch , Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>

                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
