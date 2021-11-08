import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
// import Profile from "../routes/Profie"
// import Editfile from "../routes/MyEditProfile"

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<Home />}>
                            {/* <Home /> */}
                        </Route>
                    </>
                ) : (
                    <Route exact path="/" element={<Auth />}>
                        {/* <Auth /> */}
                    </Route>)}
            </Routes>
        </Router>
    );
};

export default AppRouter;