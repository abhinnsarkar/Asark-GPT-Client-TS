import React from "react";
import AccountInnerBox from "../Account/AccountInnerBox";
import { Box } from "@mui/material";

type AccountForLaptopProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};
const AccountForLaptop: React.FC<AccountForLaptopProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    return (
        <Box
            sx={{
                width: "40%",
                // bgcolor: "blue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* <Box 
            sx={{border: "2px solid #32c4a7",
            borderRadius: "10px",}}
            > */}
            <AccountInnerBox
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                isPopup={false}
            />
            {/* </Box> */}
        </Box>
    );
};

export default AccountForLaptop;
