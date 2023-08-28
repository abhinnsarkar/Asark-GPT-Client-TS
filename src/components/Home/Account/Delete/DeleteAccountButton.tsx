import React from "react";
import DeleteModal from "./DeleteModal";

import { Button, Typography } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

type DeleteAccountButtonProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                    bgcolor: "#202123",
                    textAlign: "center",
                    height: "25%",
                    // height: !isLaptop && !isPortrait ? "40%" : "25%",
                    color: "white",
                    border: "2px solid red",
                    borderRadius: "10px",
                    width: verticalPhone ? "100%" : "95%",
                    "&:hover": {
                        bgcolor: "#202123",
                        width: "97%",
                        height: "29%",
                        // height: !isLaptop && !isPortrait ? "42%" : "27%",
                    },
                    // marginTop: "10px",
                }}
                style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                }}
            >
                <Typography noWrap textTransform="none">
                    Delete Account
                </Typography>{" "}
                <PersonRemoveIcon />
            </Button>

            <DeleteModal
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default DeleteAccountButton;
