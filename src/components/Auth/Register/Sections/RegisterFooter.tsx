import { Box, Button, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";
// import "../../../shared/components/linkStyle.css";
import AuthFooter from "../../Sections/AuthFooter";

const RegisterFooter = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    handleSubmit,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    handleSubmit: () => Promise<void>;
}) => {
    return (
        <AuthFooter
            submitLabel="Sign Up"
            redirectPath="/login"
            linkMessage="Already have an account? Login"
            horizontalLaptop={horizontalLaptop}
            verticalPhone={verticalPhone}
            horizontalPhone={horizontalPhone}
            handleSubmit={handleSubmit}
        />
    );
};

export default RegisterFooter;
