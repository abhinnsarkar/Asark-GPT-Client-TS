// import { Box, IconButton, Modal, Typography } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import React from "react";

// type AnswerModalProps = {
//     horizontalLaptop: boolean;
//     verticalPhone: boolean;
//     horizontalPhone: boolean;
//     open: boolean;
//     handleClose: () => void;
//     user: string;
//     ai: string;
// };

// const AnswerModal: React.FC<AnswerModalProps> = ({
//     horizontalLaptop,
//     verticalPhone,
//     horizontalPhone,
//     open,
//     handleClose,
//     user,
//     ai,
// }) => {
//     return (
//         <Modal open={open} onClose={handleClose}>
//             <Box
//                 className="answer-modal"
//                 sx={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: horizontalLaptop ? "75vw" : "100vw",
//                     height: horizontalLaptop ? "75vh" : "100vh",
//                     // width: isPortrait || !isLaptop ? "100vw" : "75vw",
//                     // height: isPortrait || !isLaptop ? "100vh" : "75vh",
//                     // width: "100vw",
//                     // height: "100vh",
//                     bgcolor: "#202123",
//                     // bgcolor: "red",
//                     border: "5px solid #32c4a7",
//                     // borderColor: "red",
//                     borderRadius: "15px",
//                     boxShadow: 24,
//                     p: 4,
//                 }}
//             >
//                 <Box
//                     sx={{
//                         bgcolor: !horizontalLaptop ? "blue" : "purple",
//                         border: !horizontalLaptop ? "5px solid #32c4a7" : "",
//                         width: !horizontalLaptop ? "95%" : "",
//                         height: !horizontalLaptop ? "95%" : "",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "end",
//                             width: "100%",
//                         }}
//                     >
//                         <IconButton onClick={handleClose}>
//                             <CloseIcon fontSize="large" />
//                         </IconButton>
//                     </Box>

//                     <Box
//                         className="user-shell"
//                         sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-evenly",
//                             bgcolor: "#202123",
//                             border: "2px solid #32c4a7",
//                             borderRadius: "10px",
//                         }}
//                     >
//                         <Box
//                             className="user-box"
//                             sx={{
//                                 width: "95%",
//                                 // maxHeight: isPortrait ? "10vh" : "20vh",
//                                 maxHeight: verticalPhone ? "10vh" : "20vh",
//                                 overflow: "auto",
//                                 display: "-webkit-box",
//                                 color: "white",
//                                 "-webkit-line-clamp": 3,
//                                 "-webkit-box-orient": "vertical",
//                             }}
//                         >
//                             <Typography variant={verticalPhone ? "h5" : "h3"}>
//                                 {user}
//                             </Typography>
//                         </Box>
//                     </Box>
//                     <Box
//                         className="ai-shell"
//                         sx={{
//                             marginTop: "2%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-evenly",
//                             bgcolor: "#202123",
//                             border: "2px solid #32c4a7",
//                             borderRadius: "10px",
//                         }}
//                     >
//                         <Box
//                             className="ai-box"
//                             sx={{
//                                 width: "95%",
//                                 maxHeight: verticalPhone ? "70vh" : "",
//                                 overflow: "auto",
//                                 display: "-webkit-box",
//                                 color: "white",
//                                 "-webkit-line-clamp": 3,
//                                 "-webkit-box-orient": "vertical",
//                             }}
//                         >
//                             {/* <Typography variant="body">{ai}</Typography> */}
//                             <Typography>{ai}</Typography>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };

// export default AnswerModal;

import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

type AnswerModalProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    open: boolean;
    handleClose: () => void;
    user: string;
    ai: string;
};

const AnswerModal: React.FC<AnswerModalProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    open,
    handleClose,
    user,
    ai,
}) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                className="answer-modal"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: !horizontalLaptop ? "100vw" : "75vw",
                    height: !horizontalLaptop ? "100vh" : "75vh",
                    // width: !horizontalLaptop ? window.innerWidth : "75vw",
                    // height: !horizontalLaptop ? window.innerHeight : "75vh",
                    bgcolor: "#202123",
                    // bgcolor: "red",
                    border: "5px solid #32c4a7",
                    borderRadius: "15px",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>

                <Box
                    className="user-shell"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        bgcolor: "#202123",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        className="user-box"
                        sx={{
                            width: "95%",
                            maxHeight: verticalPhone ? "10vh" : "20vh",
                            overflow: "auto",
                            display: "-webkit-box",
                            color: "white",
                            "-webkit-line-clamp": 3,
                            "-webkit-box-orient": "vertical",
                        }}
                    >
                        <Typography variant={verticalPhone ? "h5" : "h3"}>
                            {user}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className="ai-shell"
                    sx={{
                        marginTop: "2%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        bgcolor: "#202123",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        className="ai-box"
                        sx={{
                            width: "95%",
                            maxHeight: verticalPhone ? "70vh" : "",
                            overflow: "auto",
                            display: "-webkit-box",
                            color: "white",
                            "-webkit-line-clamp": 3,
                            "-webkit-box-orient": "vertical",
                        }}
                    >
                        {/* <Typography variant="body">{ai}</Typography> */}
                        <Typography>{ai}</Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default AnswerModal;
