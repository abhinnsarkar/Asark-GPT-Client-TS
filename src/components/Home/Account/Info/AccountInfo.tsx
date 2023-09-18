import { Box } from "@mui/material";
import React from "react";
import AccountInfoItem from "./AccountInfoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const AccountInfo = ({ horizontalPhone }: { horizontalPhone: boolean }) => {
    const authDetails = useSelector((state: RootState) => state.auth);

    type userFormat = {
        name: string;
        email: string;
    };

    const user = authDetails.user as userFormat;

    return (
        <Box
            className="box-user-info"
            sx={{
                width: "100%",
                height: horizontalPhone ? "35%" : "20%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    width: "95%",
                }}
            >
                <AccountInfoItem label="Name" value={user.name} />
                <AccountInfoItem label="Email" value={user.email} />
            </Box>
        </Box>
    );
};

export default AccountInfo;
