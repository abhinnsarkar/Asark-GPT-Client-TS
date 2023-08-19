// import { closeAlert } from "./store/reducers/alertReducer";
// import React, { useEffect, useState } from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//     useNavigate,
//     Navigate,
// } from "react-router-dom";
// import "./shared/components/linkStyle.css";

// import WelcomePage from "./components/Welcome/WelcomePage";
// import RegisterPage from "./components/Auth/Register/RegisterPage";
// import LoginPage from "./components/Auth/Login/LoginPage";
// import AlertNotification from "./shared/components/AlertNotification";
// import HomePage from "./components/Home/HomePage";
// import useGetIsLoggedIn from "./shared/utils/getIsLoggedIn";
// import setAuthToken from "./shared/utils/setAuthToken";

// const AppScaled = () => {
//     // const [isLaptop, setIsLaptop] = useState<boolean>();
//     // const [isPortrait, setIsPortrait] = useState<boolean>();
//     // const [horizontalLaptop, setHorizontalLaptop] = useState<boolean>();
//     // const [verticalPhone, setVerticalPhone] = useState<boolean>();
//     // const [horizontalPhone, setHorizontalPhone] = useState<boolean>();

//     // useEffect(() => {
//     //     const handleOrientationChange = () => {
//     //         setIsPortrait(window.innerHeight > window.innerWidth);
//     //         setVerticalPhone(window.innerHeight > window.innerWidth);
//     //         setHorizontalPhone(
//     //             window.innerWidth > window.innerHeight &&
//     //                 window.innerWidth < 1000
//     //         );
//     //     };

//     //     window.addEventListener("resize", handleOrientationChange);

//     //     setIsLaptop(window.innerWidth > 1000);
//     //     setHorizontalLaptop(window.innerWidth > 1000);
//     //     setIsPortrait(window.innerWidth < window.innerHeight);

//     //     return () => {
//     //         window.removeEventListener("resize", handleOrientationChange);
//     //     };
//     // }, []);

//     // // const navigate = useNavigate();

//     // // useEffect(() => {
//     // //     // if (useGetIsLoggedIn()) {
//     // if (localStorage.getItem("token")) {
//     //     setAuthToken();
//     //     return <Navigate to="/home" />;
//     // }
//     // // navigate("/home");
//     // // } else {
//     // //     return <Navigate to="/welcome" />;
//     // // }
//     // // }, [navigate]);

//     // const [isLaptop, setIsLaptop] = useState<boolean>(false);
//     const [isLaptop, setIsLaptop] = useState<boolean>();
//     setIsLaptop(false);

//     // const [isPortrait, setIsPortrait] = useState<boolean>(false);
//     const [isPortrait, setIsPortrait] = useState<boolean>();
//     setIsPortrait(false);

//     // const [horizontalLaptop, setHorizontalLaptop] = useState<boolean>(false);
//     const [horizontalLaptop, setHorizontalLaptop] = useState<boolean>();
//     setHorizontalLaptop(true);

//     // const [verticalPhone, setVerticalPhone] = useState<boolean>(false);
//     const [verticalPhone, setVerticalPhone] = useState<boolean>();
//     setVerticalPhone(false);

//     // const [horizontalPhone, setHorizontalPhone] = useState<boolean>(false);
//     const [horizontalPhone, setHorizontalPhone] = useState<boolean>();
//     setHorizontalPhone(false);

//     useEffect(() => {
//         const handleOrientationChange = () => {
//             // setIsPortrait(window.innerHeight > window.innerWidth);
//             setVerticalPhone(window.innerHeight > window.innerWidth);
//             setHorizontalPhone(
//                 window.innerWidth > window.innerHeight &&
//                     window.innerWidth < 1000
//             );
//             setHorizontalLaptop(window.innerWidth > 1000);
//         };

//         window.addEventListener("resize", handleOrientationChange);

//         // setIsLaptop(window.innerWidth > 1000);

//         // setIsPortrait(window.innerWidth < window.innerHeight);

//         return () => {
//             window.removeEventListener("resize", handleOrientationChange);
//         };
//     }, []);

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem("token")) {
//             setAuthToken();
//             navigate("/home");
//         } else {
//             navigate("/welcome");
//         }
//     }, [navigate]);

//     return (
//         // <Router>
//         <>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <WelcomePage
//                             horizontalLaptop={horizontalLaptop}
//                             verticalPhone={verticalPhone}
//                             horizontalPhone={horizontalPhone}
//                         />
//                     }
//                 />
//                 <Route
//                     path="/welcome"
//                     element={
//                         <WelcomePage
//                             horizontalLaptop={horizontalLaptop}
//                             verticalPhone={verticalPhone}
//                             horizontalPhone={horizontalPhone}
//                         />
//                     }
//                 />
//                 <Route
//                     path="/register"
//                     element={
//                         <RegisterPage
//                             horizontalLaptop={horizontalLaptop}
//                             verticalPhone={verticalPhone}
//                             horizontalPhone={horizontalPhone}
//                         />
//                     }
//                 />
//                 <Route
//                     path="/login"
//                     element={
//                         <LoginPage
//                             horizontalLaptop={horizontalLaptop}
//                             verticalPhone={verticalPhone}
//                             horizontalPhone={horizontalPhone}
//                         />
//                     }
//                 />
//                 <Route
//                     path="/home"
//                     element={
//                         <HomePage
//                             horizontalLaptop={horizontalLaptop}
//                             verticalPhone={verticalPhone}
//                             horizontalPhone={horizontalPhone}
//                         />
//                     }
//                 />
//             </Routes>
//             <AlertNotification closeAlert={closeAlert} />
//         </>
//         // </Router>
//     );
// };

// export default AppScaled;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect, useNavigate } from "react-router";
import "./shared/components/linkStyle.css";

import WelcomePage from "./components/Welcome/WelcomePage";
import RegisterPage from "./components/Auth/Register/RegisterPage";
import LoginPage from "./components/Auth/Login/LoginPage";
import AlertNotification from "./shared/components/AlertNotification";
import HomePage from "./components/Home/HomePage";
import setAuthToken from "./shared/utils/setAuthToken";
import { closeAlert } from "./store/reducers/alertReducer";

const AppScaled = () => {
    // const [isLaptop, setIsLaptop] = useState<boolean>(false);
    // const [isPortrait, setIsPortrait] = useState<boolean>(false);
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
            console.log("horizontalLaptop", window.innerWidth > 1000);
            console.log(
                "verticalPhone",
                window.innerHeight > window.innerWidth
            );
            console.log(
                "horizontalPhone",
                window.innerWidth > window.innerHeight &&
                    window.innerWidth < 1000
            );
        };

        window.addEventListener("resize", handleOrientationChange);

        // setIsLaptop(window.innerWidth > 1000);

        // setIsPortrait(window.innerWidth < window.innerHeight);

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

    // console.log("horizontalLaptop", horizontalLaptop);
    // console.log("verticalPhone", verticalPhone);
    // console.log("horizontalPhone", horizontalPhone);

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
