import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

const AuthHeader = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    header,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    header: string;
}) => {
    const navigate = useNavigate();

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
                                justifyContent: "flex-start",
                                marginTop: horizontalPhone ? "1.5%" : "0%",
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
                sx={{
                    width: "100vw",
                    height: verticalPhone ? "8vh" : "15vh",
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
                        <Typography
                            variant={
                                verticalPhone || horizontalPhone ? "h3" : "h1"
                            }
                            fontWeight="bold"
                            sx={{ color: "#32c4a7" }}
                        >
                            {header}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AuthHeader;
