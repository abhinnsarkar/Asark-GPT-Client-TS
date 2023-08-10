import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

const Header = ({
    isLaptop,
    isPortrait,
    header,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
    header: string;
}) => {
    const navigate = useNavigate();

    return (
        <>
            <Box
                className="register-header-box"
                sx={{
                    width: "100vw",
                    height: "10vh",
                    // bgcolor: "red",
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <Box
                    className="register-header-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="header-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                        }}
                    >
                        <Button
                            className="register-header-button"
                            sx={{
                                bgcolor: "#d8c3fb",
                                width: isPortrait ? "90%" : "35%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#b48cf7",
                                },
                                justifyContent: "flex-start",
                            }}
                            onClick={() => {
                                navigate("/welcome");
                            }}
                        >
                            <ArrowBackIosNewIcon />{" "}
                            <Typography textTransform="none">
                                Back to Welcome
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                className="register-title-box"
                sx={{
                    width: "100vw",
                    height: isPortrait ? "8vh" : "15vh",
                    // bgcolor: "blue",
                    display: "flex",
                    // alignItems: "center",
                }}
            >
                <Box
                    className="register-title-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 0,
                    }}
                >
                    <Box
                        className="register-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                        }}
                    >
                        <Typography
                            variant={isPortrait || !isLaptop ? "h3" : "h1"}
                            fontWeight="bold"
                            sx={{ color: "#d8c3fb" }}
                        >
                            {header}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Header;
