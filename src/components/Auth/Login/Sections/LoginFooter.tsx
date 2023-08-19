import { Box, Button, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import AuthFooter from "../../Sections/AuthFooter";

const LoginFooter = ({
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
        // <>
        //     <Box
        //         sx={{
        //             width: "100vw",
        //             height: "10vh",
        //             display: "flex",
        //         }}
        //     >
        //         <Box
        //             sx={{
        //                 width: "100%",
        //                 display: "flex",
        //                 justifyContent: "center",
        //             }}
        //         >
        //             <Box
        //                 sx={{
        //                     width: "75%",
        //                     display: "flex",
        //                     alignItems: "center",
        //                 }}
        //             >
        //                 <Button
        //                     sx={{
        //                         bgcolor: "#32c4a7",
        //                         width: "35%",
        //                         height: "75%",
        //                         color: "white",
        //                         borderRadius: "10px",
        //                         "&:hover": {
        //                             bgcolor: "#228572",
        //                         },
        //                         justifyContent: "center",
        //                     }}
        //                     onClick={handleSubmit}
        //                 >
        //                     <Typography textTransform="none">Log In</Typography>{" "}
        //                     <LoginIcon />
        //                 </Button>
        //             </Box>
        //         </Box>
        //     </Box>

        //     <Box
        //         sx={{
        //             width: "100vw",
        //             height: "15vh",
        //             display: "flex",
        //         }}
        //     >
        //         <Box
        //             sx={{
        //                 width: "100%",
        //                 display: "flex",
        //                 justifyContent: "center",
        //                 marginBottom: 0,
        //             }}
        //         >
        //             <Box
        //                 sx={{
        //                     width: "75%",
        //                 }}
        //             >
        //                 <Link className="custom" to="/register">
        //                     Need an account? Make one
        //                 </Link>
        //             </Box>
        //         </Box>
        //     </Box>
        // </>
        <AuthFooter
            submitLabel="Log In"
            redirectPath="/register"
            linkMessage="Don't have an account? Make one"
            horizontalLaptop={horizontalLaptop}
            verticalPhone={verticalPhone}
            horizontalPhone={horizontalPhone}
            handleSubmit={handleSubmit}
        />
    );
};

export default LoginFooter;
