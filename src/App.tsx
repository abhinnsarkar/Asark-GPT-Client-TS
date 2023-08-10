import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import from react-router-dom

import WelcomePage from "./components/Welcome/WelcomePage";
import SignInComponent from "./SignInComponent";
import RegisterPage from "./components/Auth/Register/RegisterPage";
import LoginPage from "./components/Auth/Login/LoginPage";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <WelcomePage isLaptop={true} isPortrait={false} />
                        }
                    />
                    <Route
                        path="/welcome"
                        element={
                            <WelcomePage isLaptop={true} isPortrait={false} />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <RegisterPage isLaptop={true} isPortrait={false} />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <LoginPage isLaptop={true} isPortrait={false} />
                        }
                    />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
