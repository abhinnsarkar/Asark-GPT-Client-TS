import React from "react";
import { Box, Typography } from "@mui/material";

const Avatar = ({
    verticalPhone,
    isPopup,
    name,
}: {
    verticalPhone: boolean;
    isPopup: boolean;
    name: string;
}) => {
    console.log("name is ", name);
    console.log("popup is ", isPopup);

    return (
        <Box
            sx={{
                bgcolor: "#32c4a7",
                width: isPopup ? (verticalPhone ? "30vw" : "55vw") : "25vh",
                height: isPopup ? (verticalPhone ? "30vw" : "55vw") : "25vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "150px",
            }}
        >
            <Typography
                sx={{
                    fontSize: "4em",
                    fontWeight: 700,
                }}
            >
                {name.split("")[0]}
            </Typography>
        </Box>
    );
};

export default Avatar;
