import { Box, Button, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
// import "../../../shared/components/linkStyle.css";

const AuthFooter = ({
    submitLabel,
    redirectPath,
    linkMessage,
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    handleSubmit,
}: {
    submitLabel: string;
    redirectPath: string;
    linkMessage: string;
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    handleSubmit: () => Promise<void>;
}) => {
    return (
        <>
            <Box
                sx={{
                    width: "100vw",
                    height: "10vh",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "75%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#32c4a7",
                                width: verticalPhone ? "90%" : "35%",
                                height: "75%",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#228572",
                                },
                                justifyContent: "center",
                            }}
                            onClick={handleSubmit}
                        >
                            <Typography textTransform="none">
                                {submitLabel}
                            </Typography>{" "}
                            {submitLabel === "Sign Up" ? (
                                <PersonAddAltIcon />
                            ) : (
                                <LoginIcon />
                            )}
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "100vw",
                    height: "15vh",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 0,
                    }}
                >
                    <Box
                        sx={{
                            width: "75%",
                        }}
                    >
                        <Link className="custom" to={redirectPath}>
                            {linkMessage}
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AuthFooter;
