import React, { useEffect, useState } from "react";
import { apiClient } from "../../../api";
import { useHandleRegister } from "../../../store/actions/authActions";
import LoadingModal from "../../../shared/components/LoadingModal";
import { Box, Button, CssBaseline } from "@mui/material";
import RegisterHeader from "./Sections/RegisterHeader";
import RegisterMiddle from "./Sections/RegisterMiddle";
import RegisterFooter from "./Sections/RegisterFooter";
import { Navigate } from "react-router";
import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";
import setAuthToken from "../../../shared/utils/setAuthToken";

const RegisterPage = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setAuthToken();
    //         navigate("/home");
    //     }
    // }, [navigate]);

    const handleRegister = useHandleRegister(); // Call the useHandleRegister hook to get the function
    interface RegisterUser {
        name: string;
        email: string;
        password: string;
    }

    const [name, setName] = useState("");
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
        const user = { name, email, password };
        handleOpenLoading();
        console.log("user", user);

        await handleRegister({ user }).then(() => {
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
                <RegisterHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
                <RegisterMiddle
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />

                <RegisterFooter
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

export default RegisterPage;
