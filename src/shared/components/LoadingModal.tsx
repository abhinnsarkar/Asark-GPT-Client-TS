import React from "react";
import { Box, CircularProgress, Modal } from "@mui/material";

const LoadingModal = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    open,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    open: boolean;
}) => {
    return (
        <Modal open={open}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: horizontalLaptop
                        ? "10vw"
                        : verticalPhone
                        ? "50vw"
                        : "50vh",
                    height: horizontalLaptop
                        ? "10vw"
                        : verticalPhone
                        ? "50vw"
                        : "50vh",
                    // width: verticalPhone ? "50vw" :  "50vh",
                    // height: verticalPhone ? "50vw" : "50vh",
                    // width: "10vw",
                    // height: "10vw",

                    bgcolor: "#202123",
                    border: "5px solid #32c4a7",
                    borderRadius: "10px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress sx={{ color: "white" }} />
            </Box>
        </Modal>
    );
};

export default LoadingModal;
