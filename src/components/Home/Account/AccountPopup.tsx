import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, IconButton } from "@mui/material";
import React from "react";

import AccountInnerBox from "./AccountInnerBox";

type AccountPopupProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    open: boolean;
    handleClose: () => void;
};
const AccountPopup: React.FC<AccountPopupProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    open,
    handleClose,
}) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                // sx={{
                //     position: "absolute",
                //     top: "50%",
                //     left: "50%",
                //     transform: "translate(-50%, -50%)",
                //     width: "75vw",
                //     height: "75vh",
                //     bgcolor: "#202123",
                //     border: "2px solid #32c4a7",
                //     borderRadius: "10px",
                //     boxShadow: 24,
                //     // p: 4,
                //     display: "flex",
                //     alignItems: "center",
                //     flexDirection: "column",
                // }}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: !horizontalLaptop ? "100vw" : "75vw",
                    height: !horizontalLaptop ? "100vh" : "75vh",
                    // width: !horizontalLaptop ? window.innerWidth : "75vw",
                    // height: !horizontalLaptop ? window.innerHeight : "75vh",
                    bgcolor: "#202123",
                    // bgcolor: "red",
                    border: "5px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <IconButton
                            onClick={handleClose}
                            sx={{ color: "white" }}
                        >
                            <CloseIcon
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </IconButton>
                    </Box>

                    <AccountInnerBox
                        horizontalLaptop={horizontalLaptop}
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                        isPopup={true}
                    />
                </>
            </Box>
        </Modal>
    );
};

export default AccountPopup;
