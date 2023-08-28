import { Box } from "@mui/material";
import React from "react";
import AccountForLaptop from "./AccountForLaptop";
import ChatSection from "./ChatSection/ChatSection";

const HomeMiddle = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    height: "89vh",
                    flexDirection: "row",
                }}
            >
                {horizontalLaptop ? (
                    <AccountForLaptop
                        horizontalLaptop={horizontalLaptop}
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                    />
                ) : (
                    <></>
                )}

                <ChatSection
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
            </Box>
        </>
    );
};
export default HomeMiddle;
