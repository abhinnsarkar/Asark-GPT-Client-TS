import { Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import logout from "../../../shared/utils/logout";

const LogoutButton = ({ verticalPhone }: { verticalPhone: boolean }) => {
    return (
        <Button
            variant="contained"
            onClick={logout}
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
                Logout
            </Typography>
            {"  "}
            <LogoutIcon />
        </Button>
    );
};

export default LogoutButton;
