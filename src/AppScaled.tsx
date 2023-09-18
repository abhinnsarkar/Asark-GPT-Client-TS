import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./shared/components/linkStyle.css";

import WelcomePage from "./components/Welcome/WelcomePage";
import RegisterPage from "./components/Auth/Register/RegisterPage";
import LoginPage from "./components/Auth/Login/LoginPage";
import AlertNotification from "./shared/components/AlertNotification";
import HomePage from "./components/Home/HomePage";
import { closeAlert } from "./store/reducers/alertReducer";

const AppScaled = () => {
    const [horizontalLaptop, setHorizontalLaptop] = useState<boolean>(false);
    const [verticalPhone, setVerticalPhone] = useState<boolean>(false);
    const [horizontalPhone, setHorizontalPhone] = useState<boolean>(false);

    useEffect(() => {
        const handleOrientationChange = () => {
            setHorizontalLaptop(window.innerWidth > 1000);
            setVerticalPhone(window.innerHeight > window.innerWidth);
            setHorizontalPhone(
                window.innerWidth > window.innerHeight &&
                    window.innerWidth < 1000
            );
        };

        window.addEventListener("resize", handleOrientationChange);

        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, []);

    useEffect(() => {
        setHorizontalLaptop(window.innerWidth > 1000);
        setVerticalPhone(window.innerHeight > window.innerWidth);
        setHorizontalPhone(
            window.innerWidth > window.innerHeight && window.innerWidth < 1000
        );
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <WelcomePage
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                        />
                    }
                />
                <Route
                    path="/welcome"
                    element={
                        <WelcomePage
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                        />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RegisterPage
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <LoginPage
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                        />
                    }
                />
                <Route
                    path="/home"
                    element={
                        <HomePage
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                        />
                    }
                />
            </Routes>
            <AlertNotification closeAlert={closeAlert} />
        </BrowserRouter>
    );
};

export default AppScaled;
