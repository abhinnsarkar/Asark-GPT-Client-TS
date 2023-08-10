import React from "react";
import CustomInput from "../../../shared/components/CustomInput";
import { Box } from "@mui/material";

const LoginInputs = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => Promise<void>;
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
            />
            <CustomInput
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
                handleSubmit={handleSubmit}
            />
        </Box>
    );
};

export default LoginInputs;
