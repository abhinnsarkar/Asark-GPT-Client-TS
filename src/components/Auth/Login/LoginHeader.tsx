import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import Header from "../Sections/Header";

const LoginHeader = ({
    isLaptop,
    isPortrait,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
}) => {
    return (
        <Header isLaptop={isLaptop} isPortrait={isPortrait} header="Login" />
    );
};

export default LoginHeader;
