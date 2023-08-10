import React from "react";
import { Box, CircularProgress, Modal } from "@mui/material";

const LoadingModal = ({
    isLaptop,
    isPortrait,
    open,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
    open: boolean;
}) => {
    const verticalPhone = !isLaptop && isPortrait;
    const horizontalPhone = !isLaptop && !isPortrait;
    // const horizontalLaptop = isLaptop && !isPortrait;

    return (
        <Modal open={open}>
            <Box
                className="answer-modal"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: verticalPhone
                        ? "50vw"
                        : horizontalPhone
                        ? "50vh"
                        : "10vw",
                    height: verticalPhone
                        ? "50vw"
                        : horizontalPhone
                        ? "50vh"
                        : "10vw",

                    bgcolor: "#202123",
                    border: "5px solid #d8c5fc",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        </Modal>
    );
};

export default LoadingModal;
