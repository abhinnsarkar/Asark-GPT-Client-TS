import { Box } from "@mui/material";
import React from "react";
import HistorySection from "./History/HistorySection";
import PromptInput from "./Prompt/PromptInput";

type ChatSectionProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};
const ChatSection: React.FC<ChatSectionProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    return (
        <Box
            sx={{
                width: horizontalLaptop ? "59.5%" : "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <HistorySection
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
            />
            <PromptInput
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
            />
        </Box>
    );
};

export default ChatSection;
