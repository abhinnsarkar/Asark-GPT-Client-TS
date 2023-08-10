import React, { useState } from "react";
import { apiClient } from "../../../api";
import { useHandleRegister } from "../../../store/actions/authActions";
import LoadingModal from "../../../shared/components/LoadingModal";
import { Box, Button, CssBaseline } from "@mui/material";
import RegisterHeader from "./RegisterHeader";
import RegisterMiddle from "./RegisterMiddle";
import RegisterFooter from "./RegisterFooter";
import { Navigate } from "react-router";
import useGetIsLoggedIn from "../../../shared/utils/getIsLoggedIn";

const RegisterPage = ({
    isLaptop,
    isPortrait,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
}) => {
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
        // console.log(email, password, name);

        // const response = await apiClient.get("http://localhost:54321/api");

        // const data = response.data;
        // const msg = data.msg;

        // console.log("data", data);
        // console.log("msg", msg);

        // console.log("finished basic api response");

        // const user: RegisterUser = {
        //     name: "johndoe",
        //     email: "johndoe@gmail.com",
        //     password: "password",
        // };
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
                    // bgcolor: "green",
                }}
            >
                {/* <Button onClick={handleSubmit}>Click</Button> */}
                <RegisterHeader isLaptop={isLaptop} isPortrait={isPortrait} />
                <RegisterMiddle
                    isPortrait={isPortrait}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />

                <RegisterFooter
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

export default RegisterPage;
