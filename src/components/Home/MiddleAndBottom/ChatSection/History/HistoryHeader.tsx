// import { Box, IconButton, Typography } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import React from "react";

// type HistoryHeaderProps = {
//     horizontalLaptop: boolean;
//     verticalPhone: boolean;
//     horizontalPhone: boolean;
// };
// const HistoryHeader: React.FC<HistoryHeaderProps> = ({
//     horizontalLaptop,
//     verticalPhone,
//     horizontalPhone,
// }) => {
//     const refresh = async () => {
//         setMsgsLoading(true);
//         fetchData();
//     };

//     return (
//         <Box
//             sx={{
//                 width: "98%",
//                 height: "12%",
//                 // bgcolor: "purple",
//                 marginTop: "0.5%",
//                 border: "2px solid #32c4a7",
//                 borderRadius: "10px",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 color: "white",
//             }}
//         >
//             <Box
//                 sx={{
//                     width: "55%",
//                     // bgcolor: "red",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                 }}
//             >
//                 <Typography
//                     sx={{ marginLeft: "2%" }}
//                     variant={
//                         horizontalLaptop ? "h4" : verticalPhone ? "h6" : "h5"
//                     }
//                 >
//                     Refresh Chats
//                 </Typography>
//                 <IconButton sx={{ color: "white" }} onClick={refresh}>
//                     <RefreshIcon fontSize="large" />
//                 </IconButton>
//             </Box>
//             <Box
//                 sx={{
//                     width: "45%",
//                     // bgcolor: "blue",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "flex-end",
//                 }}
//             >
//                 <Typography sx={{ marginRight: "2%" }} variant="h6">
//                     Count : 100
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// export default HistoryHeader;
import React from "react";

const HistoryHeader = () => {
    return <div>HistoryHeader</div>;
};

export default HistoryHeader;
