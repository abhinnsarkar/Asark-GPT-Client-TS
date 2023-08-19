import React from "react";
import { Box } from "@mui/material";
import RegisterInputs from "../RegisterInputs";

const RegisterMiddle = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
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
            sx={{
                width: "100vw",
                height: verticalPhone
                    ? "50vh"
                    : horizontalLaptop
                    ? "30vh"
                    : "60vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
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
                        horizontalLaptop={horizontalLaptop}
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterMiddle;
