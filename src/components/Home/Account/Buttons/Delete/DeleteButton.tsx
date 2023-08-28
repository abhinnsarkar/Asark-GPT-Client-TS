import React from "react";
import { Button, Typography } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useDeleteAccount } from "../../../../../store/actions/authActions";
import DeleteModal from "./DeleteModal";

type DeleteButtonProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // console.log("button should be small");
    const deleteAccount = useDeleteAccount();

    const handleDeleteAccount = async () => {
        // const user = { email, password };
        // handleOpenLoading();
        // console.log("user", user);

        await deleteAccount();
    };
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

export default DeleteButton;
