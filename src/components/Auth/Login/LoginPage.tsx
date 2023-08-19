// // import React, { useState } from "react";
// // import { apiClient } from "../../../api";
// // import { useHandleLogin } from "../../../store/actions/authActions";
// // import LoadingModal from "../../../shared/components/LoadingModal";
// // import { Box, Button, CssBaseline } from "@mui/material";
// // import LoginHeader from "./Sections/LoginHeader";
// // import LoginMiddle from "./Sections/LoginMiddle";
// // import LoginFooter from "./Sections/LoginFooter";
// // import { Navigate } from "react-router";
// // import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";

// // const LoginPage = ({
// //     horizontalLaptop,
// //     verticalPhone,
// //     horizontalPhone,
// // }: {
// //     horizontalLaptop: boolean;
// //     verticalPhone: boolean;
// //     horizontalPhone: boolean;
// // }) => {
// //     const handleLogin = useHandleLogin(); // Call the useHandleRegister hook to get the function
// //     interface LoginUser {
// //         email: string;
// //         password: string;
// //     }

// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const [loadingOpen, setLoadingOpen] = React.useState(false);
// //     const handleOpenLoading = () => setLoadingOpen(true);
// //     const handleCloseLoading = () => setLoadingOpen(false);

// //     const closeModal = () => {
// //         console.log("closing modal");
// //         handleCloseLoading();
// //     };

// //     const handleSubmit = async () => {
// //         const user = { email, password };
// //         handleOpenLoading();
// //         console.log("user", user);

// //         await handleLogin({ user }).then(() => {
// //             closeModal();
// //         });
// //     };

// //     if (useGetIsLoggedIn()) {
// //         // return <Navigate to="/home" />;
// //     }

// //     return (
// //         <React.Fragment>
// //             <CssBaseline />
// //             <Box
// //                 sx={{
// //                     width: "100vw",
// //                     height: "100vh",
// //                     bgcolor: "#202123",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                     display: "flex",
// //                     flexDirection: "column",
// //                 }}
// //             >
// //                 <LoginHeader
// //                     horizontalLaptop={horizontalLaptop}
// //                     verticalPhone={verticalPhone}
// //                     horizontalPhone={horizontalPhone}
// //                 />
// //                 <LoginMiddle
// //                     horizontalLaptop={horizontalLaptop}
// //                     verticalPhone={verticalPhone}
// //                     horizontalPhone={horizontalPhone}
// //                     email={email}
// //                     setEmail={setEmail}
// //                     password={password}
// //                     setPassword={setPassword}
// //                     handleSubmit={handleSubmit}
// //                 />

// //                 <LoginFooter
// //                     horizontalLaptop={horizontalLaptop}
// //                     verticalPhone={verticalPhone}
// //                     horizontalPhone={horizontalPhone}
// //                     handleSubmit={handleSubmit}
// //                 />
// //             </Box>
// //             <LoadingModal
// //                 horizontalLaptop={horizontalLaptop}
// //                 verticalPhone={verticalPhone}
// //                 horizontalPhone={horizontalPhone}
// //                 open={loadingOpen}
// //             />
// //         </React.Fragment>
// //     );
// // };

// // export default LoginPage;

// import React, { useEffect, useState } from "react";
// import { useHandleLogin } from "../../../store/actions/authActions";
// import LoadingModal from "../../../shared/components/LoadingModal";
// import { Box, CssBaseline } from "@mui/material";
// import LoginHeader from "./Sections/LoginHeader";
// import LoginMiddle from "./Sections/LoginMiddle";
// import LoginFooter from "./Sections/LoginFooter";
// import { Navigate, useNavigate } from "react-router-dom";
// import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";
// import setAuthToken from "../../../shared/utils/setAuthToken";

// interface LoginPageProps {
//     horizontalLaptop: boolean;
//     verticalPhone: boolean;
//     horizontalPhone: boolean;
// }

// const LoginPage: React.FC<LoginPageProps> = ({
//     horizontalLaptop,
//     verticalPhone,
//     horizontalPhone,
// }) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem("token")) {
//             setAuthToken();
//             navigate("/home");
//         }
//     }, [navigate]);

//     const handleLogin = useHandleLogin(); // Call the useHandleRegister hook to get the function

//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");

//     const [loadingOpen, setLoadingOpen] = React.useState<boolean>(false);
//     const handleOpenLoading = () => setLoadingOpen(true);
//     const handleCloseLoading = () => setLoadingOpen(false);

//     const closeModal = () => {
//         console.log("closing modal");
//         handleCloseLoading();
//     };

//     const handleSubmit = async () => {
//         const user = { email, password };
//         handleOpenLoading();
//         console.log("user", user);

//         await handleLogin({ user }).then(() => {
//             closeModal();
//         });
//     };

//     if (useGetIsLoggedIn()) {
//         return <Navigate to="/home" />;
//     }

//     return (
//         <React.Fragment>
//             {/* ... (rest of the component code) */}
//         </React.Fragment>
//     );
// };

// export default LoginPage;

import React, { useEffect, useState } from "react";
import { useHandleLogin } from "../../../store/actions/authActions";
import { Box, CssBaseline } from "@mui/material";
import LoginHeader from "./Sections/LoginHeader";
import LoginMiddle from "./Sections/LoginMiddle";
import LoginFooter from "./Sections/LoginFooter";
import { Navigate, redirect } from "react-router-dom";
import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";
import setAuthToken from "../../../shared/utils/setAuthToken";
import LoadingModal from "../../../shared/components/LoadingModal";

interface LoginPageProps {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}

const LoginPage: React.FC<LoginPageProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setAuthToken();
    //         // navigate("/home");
    //         redirect("/home");
    //         // <Navigate to="/home" />;
    //     }
    // }, []);

    const handleLogin = useHandleLogin();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loadingOpen, setLoadingOpen] = React.useState<boolean>(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const closeModal = () => {
        console.log("closing modal");
        handleCloseLoading();
    };

    const handleSubmit = async () => {
        const user = { email, password };
        handleOpenLoading();
        console.log("user", user);

        await handleLogin({ user }).then(() => {
            closeModal();
        });
    };

    // if (useGetIsLoggedIn()) {
    //     return <Navigate to="/home" />;
    // }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "#202123",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <LoginHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
                <LoginMiddle
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />

                <LoginFooter
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                    handleSubmit={handleSubmit}
                />
            </Box>
            <LoadingModal
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                open={loadingOpen}
            />
        </React.Fragment>
    );
};

export default LoginPage;
