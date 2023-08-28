import React from "react";
import AccountInfo from "./Info/AccountInfo";
import AccountButtons from "./AccountButtons";
import AvatarBox from "./AvatarBox";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface authStructure {
    user: {
        name: string;
        email: string;
    };
    isAuthenticated: boolean;
    token: string;
}

type AccountInnerBoxProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    isPopup: boolean;
};
const AccountInnerBox: React.FC<AccountInnerBoxProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    isPopup,
}) => {
    const authDetails = useSelector(
        (state: RootState) => state.auth
    ) as authStructure;

    const username = authDetails.user.name;

    return (
        <Box
            className="box-main"
            sx={{
                width: horizontalLaptop || horizontalPhone ? "98%" : "50%",
                height: "98%",
                border: horizontalLaptop ? "2px solid #32c4a7" : "",
                borderRadius: horizontalLaptop ? "10px" : "",
            }}
        >
            <Box
                color="primary"
                sx={{
                    marginTop: "2%",
                    textAlign: "center",
                    flexDirection: "column",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    color: "white",
                }}
                style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                }}
            >
                {!horizontalPhone ? (
                    <AvatarBox
                        verticalPhone={verticalPhone}
                        isPopup={isPopup}
                        name={username}
                    />
                ) : (
                    <></>
                )}
                <Box
                    sx={{
                        width: "100%",
                        height: horizontalPhone ? "100%" : "63%",
                        // height: "100%",
                        // bgcolor: "green",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <AccountInfo horizontalPhone={horizontalPhone} />

                    <AccountButtons
                        horizontalLaptop={horizontalLaptop}
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                        isPopup={isPopup}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default AccountInnerBox;
