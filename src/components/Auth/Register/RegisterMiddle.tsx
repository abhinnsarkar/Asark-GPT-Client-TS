import React from "react";
// import RegisterInputs from "./RegisterInputs";
import { Box } from "@mui/material";
import RegisterInputs from "./RegisterInputs";

// const RegisterMiddle = ({
//     isPortrait,
//     name,
//     setName,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleSubmit,
// }) => {
const RegisterMiddle = ({
    isPortrait,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}: {
    isPortrait: boolean;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => Promise<void>;
}) => {
    return (
        <Box
            className="register-input-box"
            sx={{
                width: "100vw",
                // height: "30vh",
                height: isPortrait ? "50vh" : "30vh",
                // bgcolor: "pink",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box
                className="register-input-center-box-1"
                sx={{
                    width: "100%",
                    height: "100%",
                    // bgcolor: "orange",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    className="register-input-center-box-2"
                    sx={{
                        // bgcolor: "purple",
                        width: "75%",
                    }}
                >
                    <RegisterInputs
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterMiddle;
