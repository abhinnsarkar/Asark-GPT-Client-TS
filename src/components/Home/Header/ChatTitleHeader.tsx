import { Box, Typography } from "@mui/material";

const ChatTitleHeader = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    return (
        <Box
            sx={{
                width: horizontalLaptop ? "60%" : "90%",
                // bgcolor: "blue",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    bgcolor: "#202123",
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    // width: horizontalPhone ? "99%" : "95%",
                    width: horizontalLaptop
                        ? "98%"
                        : horizontalPhone
                        ? "99%"
                        : "90%",
                    // height: "90%",
                    height: "87%",
                    color: "white",
                    border: "2px solid #32c4a7",
                    borderRadius: "10px",
                }}
            >
                <Typography variant="h5" textTransform={"none"}>
                    Chatting with "Asark"
                </Typography>
            </Box>
        </Box>
    );
};

export default ChatTitleHeader;
