import { Button, Typography } from "@mui/material";
import React from "react";
import { NavigateFunction } from "react-router";

const WelcomePageButton = ({
    label,
    endpoint,
    isLaptop,
    isPortrait,
    navigate,
}: {
    label: string;
    endpoint: string;
    isLaptop: boolean;
    isPortrait: boolean;
    navigate: NavigateFunction;
}) => {
    return (
        <Button
            sx={{
                bgcolor: "#d8c3fb",
                "&:hover": {
                    bgcolor: "#b48cf7",
                },
                // width: isLaptop ? "40%" : "90%",
                width: "40%",
                height: isLaptop ? "4vh" : "12vh",
                color: "white",
                borderRadius: "10px",
            }}
            onClick={() => {
                navigate(endpoint);
            }}
        >
            <Typography textTransform="none">{label}</Typography>
        </Button>
    );
};

export default WelcomePageButton;
