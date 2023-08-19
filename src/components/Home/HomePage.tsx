import { Box, CssBaseline } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import useGetIsLoggedIn from "../../shared/utils/getIsLoggedIn";
import { HomeHeader } from "./Header/HomeHeader";

import HomeMiddle from "./MiddleAndBottom/HomeMiddleAndBottom";
import React, { useEffect } from "react";
import setAuthToken from "../../shared/utils/setAuthToken";
const HomePage = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem("token")) {
    //         navigate("/");
    //     }
    // }, [navigate]);

    // if (useGetIsLoggedIn()) {
    //     console.log("horizontalLaptop", horizontalLaptop);
    //     console.log("verticalPhone", verticalPhone);
    //     console.log("horizontalPhone", horizontalPhone);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("user logged in");
            setAuthToken(); // Assuming this sets the authentication token
            // redirect("/home"); // Assuming this redirects to the home page
            navigate("/home"); // Assuming this redirects to the home page
        } else {
            console.log("user NOT logged in, go back to welcome page");
            // redirect("/"); // Assuming this redirects to the welcome page
            navigate("/");
        }
    }, []); // Empty dependency array to ensure the effect runs once on mount

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
                {/* {horizontalLaptop ? (
                    <LaptopModal
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                    />
                ) : (
                    <></>
                )} */}
            </Box>
        </React.Fragment>
    );
    // }
    // return <Navigate to="/" />;
};

export default HomePage;
