import React from "react";
import CustomInput from "../../../shared/components/CustomInput";
import { Box } from "@mui/material";

const LoginInputs = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => Promise<void>;
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            }}
        >
            <CustomInput
                value={email}
                setValue={setEmail}
                placeholder="Email"
                type="text"
                handleSubmit={handleSubmit}
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
                handleSubmit={handleSubmit}
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
            />
        </Box>
    );
};

export default LoginInputs;
