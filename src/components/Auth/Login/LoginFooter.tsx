import { Box, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "../../../shared/components/linkStyle.css";

const LoginFooter = ({
    isPortrait,
    handleSubmit,
}: {
    isPortrait: boolean;
    handleSubmit: () => Promise<void>;
}) => {
    return (
        <>
            <Box
                className="register-submit-box"
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
                    className="register-submit-center-box-1"
                    sx={{
                        width: "100%",
                        // bgcolor: "orange",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="submit-title-center-box-2"
                        sx={{
                            // bgcolor: "purple",
                            width: "75%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#d8c3fb",
                                width: isPortrait ? "90%" : "35%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#b48cf7",
                                },
                                justifyContent: "center",
                            }}
                            onClick={handleSubmit}
                        >
                            <Typography textTransform="none">Log In</Typography>{" "}
                            <LoginIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                className="register-title-box"
                sx={{
                    width: "100vw",
                    // height: "12vh",
                    height: isPortrait ? "12vh" : "15vh",
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
                        <Link className="custom" to="/register">
                            Need an account? Make one
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default LoginFooter;
