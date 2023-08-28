import { Box, Button } from "@mui/material";
import React from "react";
import DeleteAccountButton from "./DeleteAccountButton";
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
                // bgcolor: "red",
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
                {/* <Button>Hi</Button>
                <Button>Hi</Button> */}
                {/* <Logout
                                        isLaptop={isLaptop}
                                        isPortrait={isPortrait}
                                    />
                                    <DeleteAccount
                                        isLaptop={isLaptop}
                                        isPortrait={isPortrait}
                                    /> */}
            </Box>
        </Box>
    );
};

export default AccountButtons;
