import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const WelcomePageButton = ({
    label,
    endpoint,
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    label: string;
    endpoint: string;
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    const navigate = useNavigate();
    return (
        <Button
            sx={{
                bgcolor: "#32c4a7",
                "&:hover": {
                    bgcolor: "#228572",
                    width: horizontalLaptop ? "35%" : "53%",
                    height: horizontalLaptop ? "55%" : "50%",
                },
                width: horizontalLaptop ? "30%" : "45%",
                height: horizontalLaptop
                    ? "50%"
                    : verticalPhone
                    ? "40%"
                    : "75%",
                color: "white",
                borderRadius: "10px",
            }}
            onClick={() => {
                navigate(endpoint);
            }}
        >
            <Typography textTransform="none">{label}</Typography>
        </Button>
    );
};

export default WelcomePageButton;
