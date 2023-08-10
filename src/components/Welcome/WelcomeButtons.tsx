import React from "react";
import WelcomePageButton from "./WelcomePageButton";
import { Box } from "@mui/material";
import { NavigateFunction } from "react-router";

const WelcomeButtons = ({
    isLaptop,
    isPortrait,
    navigate,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
    navigate: NavigateFunction;
}) => {
    return (
        <Box
            className="buttonBox"
            sx={{
                width: isPortrait ? "100vw" : "40vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            <WelcomePageButton
                label="Sign Up"
                endpoint="/register"
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                navigate={navigate}
            />
            <WelcomePageButton
                label="Login"
                endpoint="/login"
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                navigate={navigate}
            />
        </Box>
    );
};

export default WelcomeButtons;
