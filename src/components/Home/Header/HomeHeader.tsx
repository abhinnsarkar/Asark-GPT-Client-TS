import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AccountHeader from "../Account/AccountHeader";
import ChatTitleHeader from "./ChatTitleHeader";
// import AccountModal from "./Account/AccountModal";

export const HomeHeader = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    // console.log("horizontalLaptop", horizontalLaptop);
    // console.log("verticalPhone", verticalPhone);
    // console.log("horizontalPhone", horizontalPhone);

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    height: "10vh",
                    flexDirection: "row",
                }}
            >
                <AccountHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
                <ChatTitleHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
            </Box>
        </>
    );
};
