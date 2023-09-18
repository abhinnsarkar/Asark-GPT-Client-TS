import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect } from "react";
import AccountPopup from "./AccountPopup";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type AccountProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};

const AccountHeader: React.FC<AccountProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const [disabled, setDisabled] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        horizontalLaptop ? setDisabled(true) : setDisabled(false);
    }, [horizontalLaptop]);

    const handleAccountButtonClick = () => {
        if (!disabled) {
            handleOpen();
        }
    };

    return (
        <>
            <Box
                sx={{
                    width: horizontalLaptop ? "40%" : "10%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                overflow="hidden"
            >
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        bgcolor: "#202123",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        width: horizontalLaptop
                            ? "98%"
                            : horizontalPhone
                            ? "98%"
                            : "90%",
                        height: "90%",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#202123",

                            width: disabled
                                ? horizontalLaptop
                                    ? "98%"
                                    : horizontalPhone
                                    ? "98%"
                                    : "90%"
                                : horizontalPhone
                                ? "99%"
                                : "91%",

                            height: disabled ? "90%" : "100%",
                        },
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                    }}
                    style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: disabled ? "default" : "pointer",
                    }}
                    disableRipple={disabled}
                    onClick={handleAccountButtonClick}
                >
                    {!horizontalLaptop ? (
                        <></>
                    ) : (
                        <>
                            <Typography textTransform={"none"}>
                                Account
                            </Typography>{" "}
                        </>
                    )}

                    <AccountCircleIcon />
                </Button>
            </Box>

            <AccountPopup
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default AccountHeader;
