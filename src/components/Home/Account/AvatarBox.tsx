import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Avatar from "../../../shared/components/Avatar";

const AvatarBox = ({
    verticalPhone,
    isPopup,
    name,
}: {
    verticalPhone: boolean;
    isPopup: boolean;
    name: string;
}) => {
    const useStyles = makeStyles((theme) => ({
        customBox: {
            height: "35%",
            width: "auto",
            aspectRatio: "1 / 1",
        },
    }));
    const classes = useStyles();
    return (
        <Box
            className={classes.customBox}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Avatar
                verticalPhone={verticalPhone}
                isPopup={isPopup}
                name={name}
            />
        </Box>
    );
};

export default AvatarBox;
