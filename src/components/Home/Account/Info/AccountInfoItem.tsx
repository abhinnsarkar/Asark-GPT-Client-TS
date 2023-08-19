import { Box, Typography } from "@mui/material";
import React from "react";

const AccountInfoItem = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                // bgcolor: "green",
            }}
        >
            <Box>
                <Typography variant="h5">{`${label} : `}</Typography>
            </Box>
            <Box
                className="box-user-info-name"
                sx={{
                    // bgcolor: "red",
                    // display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyItems: "center",
                    overflow: "auto",
                    display: "-webkit-box",
                    color: "white",
                    "-webkit-line-clamp": 3,
                    "-webkit-box-orient": "horizontal",
                }}
            >
                <Typography
                    sx={{
                        marginLeft: "2%",
                    }}
                    variant="h6"
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};

export default AccountInfoItem;
