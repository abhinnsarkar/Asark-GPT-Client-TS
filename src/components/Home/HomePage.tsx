import { Box, CssBaseline } from "@mui/material";
import { HomeHeader } from "./Header/HomeHeader";
import HomeMiddle from "./MiddleAndBottom/HomeMiddleAndBottom";
import React, { useEffect } from "react";
import setAuthToken from "../../shared/utils/setAuthToken";
import { useNavigate } from "react-router";

const HomePage = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("user logged in");
            setAuthToken();
            navigate("/home");
        } else {
            console.log("user NOT logged in, go back to welcome page");
            navigate("/");
        }
    }, [navigate]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100vh",
                    bgcolor: "#202123",
                }}
            >
                <HomeHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
                <HomeMiddle
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                />
            </Box>
        </React.Fragment>
    );
};

export default HomePage;
