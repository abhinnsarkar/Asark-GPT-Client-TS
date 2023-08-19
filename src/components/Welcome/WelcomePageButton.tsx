import { Button, Typography } from "@mui/material";
import React from "react";
// import { NavigateFunction, redirect } from "react-router-dom";
import { redirect, useNavigate } from "react-router";

const WelcomePageButton = ({
    label,
    endpoint,
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: // navigate,
{
    label: string;
    endpoint: string;
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    // navigate: NavigateFunction;
}) => {
    const navigate = useNavigate();
    return (
        <Button
            sx={{
                bgcolor: "#32c4a7",
                "&:hover": {
                    bgcolor: "#228572",
                    width: horizontalLaptop ? "35%" : "53%",
                    height: horizontalLaptop ? "55%" : "50%",
                },
                width: horizontalLaptop ? "30%" : "45%",
                height: horizontalLaptop
                    ? "50%"
                    : verticalPhone
                    ? "40%"
                    : "75%",
                color: "white",
                borderRadius: "10px",
            }}
            onClick={() => {
                navigate(endpoint);
                console.log("cliked welcome page btn");
                // return redirect(endpoint);
            }}
        >
            <Typography textTransform="none">{label}</Typography>
        </Button>
    );
};

export default WelcomePageButton;
