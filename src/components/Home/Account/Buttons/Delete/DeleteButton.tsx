import React from "react";
import { Button, Typography } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

type DeleteButtonProps = {};
{
}
const DeleteButton = ({ verticalPhone }: { verticalPhone: boolean }) => {
    // console.log("button should be small");
    return (
        <Button
            variant="contained"
            // onClick={fn}
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
    );
};

export default DeleteButton;
