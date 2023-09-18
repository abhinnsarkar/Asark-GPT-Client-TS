import { Box, Typography } from "@mui/material";
import React from "react";

interface Message {
    user: string;
    ai: string;
}

const ChatHistoryItem = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    message,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    message: Message;
}) => {
    return (
        <Box
            sx={{
                width: "99%",
                marginBottom: "2%",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: !verticalPhone ? "98%" : "95%" }}>
                <Typography variant="h6">{message.user}</Typography>
            </Box>

            <Box sx={{ width: !verticalPhone ? "98%" : "95%" }}>
                <Typography>{message.ai}</Typography>
            </Box>
        </Box>
    );
};

export default ChatHistoryItem;
