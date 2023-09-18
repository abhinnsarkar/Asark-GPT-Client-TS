import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import ChatHistoryItem from "./ChatHistoryItem";

interface Message {
    user: string;
    ai: string;
}

const ChatHistory = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    msgsLoading,
    prevMsgs,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    msgsLoading: boolean;
    prevMsgs: Message[];
}) => {
    return (
        <Box
            sx={{
                width: "98%",
                height: "85%",
                marginTop: "0.5%",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
            }}
        >
            {msgsLoading ? (
                <CircularProgress />
            ) : (
                prevMsgs.map((chat, index) => {
                    return (
                        <ChatHistoryItem
                            horizontalLaptop={horizontalLaptop}
                            verticalPhone={verticalPhone}
                            horizontalPhone={horizontalPhone}
                            message={chat}
                        />
                    );
                })
            )}
        </Box>
    );
};

export default ChatHistory;
