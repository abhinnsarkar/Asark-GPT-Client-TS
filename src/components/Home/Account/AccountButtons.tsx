import { Box } from "@mui/material";
import React from "react";
import DeleteAccountButton from "./Delete/DeleteAccountButton";
import LogoutButton from "./LogoutButton";

const AccountButtons = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    isPopup,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    isPopup: boolean;
}) => {
    return (
        <Box
            className="box-buttons"
            sx={{
                height: horizontalPhone || horizontalLaptop ? "50%" : "25%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <DeleteAccountButton
                    horizontalLaptop={horizontalLaptop}
                    horizontalPhone={horizontalPhone}
                    verticalPhone={verticalPhone}
                />
                <LogoutButton verticalPhone={verticalPhone} />
            </Box>
        </Box>
    );
};

export default AccountButtons;
