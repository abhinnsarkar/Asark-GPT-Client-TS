import React, { useState } from "react";
import { apiClient } from "../../../api";
import { useHandleLogin } from "../../../store/actions/authActions";
import LoadingModal from "../../../shared/components/LoadingModal";
import { Box, Button, CssBaseline } from "@mui/material";
import LoginHeader from "./LoginHeader";
import LoginMiddle from "./LoginMiddle";
import LoginFooter from "./LoginFooter";
import { Navigate } from "react-router";
import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";

const LoginPage = ({
    isLaptop,
    isPortrait,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
}) => {
    const handleLogin = useHandleLogin(); // Call the useHandleRegister hook to get the function
    interface LoginUser {
        email: string;
        password: string;
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loadingOpen, setLoadingOpen] = React.useState(false);
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

    if (useGetIsLoggedIn()) {
        return <Navigate to="/home" />;
    }

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
                    // bgcolor: "green",
                }}
            >
                {/* <Button onClick={handleSubmit}>Click</Button> */}
                <LoginHeader isLaptop={isLaptop} isPortrait={isPortrait} />
                <LoginMiddle
                    isPortrait={isPortrait}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />

                <LoginFooter
                    isPortrait={isPortrait}
                    handleSubmit={handleSubmit}
                />
            </Box>
            <LoadingModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={loadingOpen}
            />
        </React.Fragment>
    );
};

export default LoginPage;
