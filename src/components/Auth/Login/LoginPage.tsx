import React, { useState } from "react";
import { useHandleLogin } from "../../../store/actions/authActions";
import { Box, CssBaseline } from "@mui/material";
import LoginHeader from "./Sections/LoginHeader";
import LoginMiddle from "./Sections/LoginMiddle";
import LoginFooter from "./Sections/LoginFooter";
import { Navigate } from "react-router-dom";
import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";
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
    const handleLogin = useHandleLogin();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loadingOpen, setLoadingOpen] = React.useState<boolean>(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const closeModal = () => {
        handleCloseLoading();
    };

    const handleSubmit = async () => {
        const user = { email, password };
        handleOpenLoading();

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
