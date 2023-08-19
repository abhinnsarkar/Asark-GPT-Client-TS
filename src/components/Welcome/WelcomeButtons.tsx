import React from "react";
import WelcomePageButton from "./WelcomePageButton";
import { Box } from "@mui/material";
import { NavigateFunction } from "react-router";

const WelcomeButtons = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    // navigate,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    // navigate: NavigateFunction;
}) => {
    return (
        <Box
            className="buttonBox"
            sx={{
                width: verticalPhone ? "100vw" : "40vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                // bgcolor: "green",
            }}
        >
            <WelcomePageButton
                label="Sign Up"
                endpoint="/register"
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                // navigate={navigate}
            />
            <WelcomePageButton
                label="Login"
                endpoint="/login"
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                // navigate={navigate}
            />
        </Box>
    );
};

export default WelcomeButtons;
