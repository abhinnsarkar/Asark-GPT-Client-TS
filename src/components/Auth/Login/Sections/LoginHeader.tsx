import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { useNavigate } from "react-router";
import AuthHeader from "../../Sections/AuthHeader";

const LoginHeader = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    return (
        <AuthHeader
            horizontalLaptop={horizontalLaptop}
            verticalPhone={verticalPhone}
            horizontalPhone={horizontalPhone}
            header="Login"
        />
    );
};

export default LoginHeader;
