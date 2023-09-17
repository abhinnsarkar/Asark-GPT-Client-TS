import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Modal,
    Switch,
    Typography,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    IconButton,
} from "@mui/material";
import { useDeleteAccount } from "../../../../store/actions/authActions";
import React from "react";

type DeleteModalProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
    open: boolean;
    handleClose: () => void;
};
const DeleteModal: React.FC<DeleteModalProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
    open,
    handleClose,
}) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        // console.log("changed to ", !checked);
    };

    const fullScreen = horizontalLaptop ? false : true;

    const deleteAccount = useDeleteAccount();

    const handleDeleteAccount = async () => {
        // const user = { email, password };
        // handleOpenLoading();
        // console.log("user", user);

        await deleteAccount();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: fullScreen ? "100vw" : "75vw",
                    height: fullScreen ? "100vh" : "75vh",
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
                        width: "100%",
                        justifyContent: "end",
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize="large" sx={{ color: "white" }} />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        // bgcolor: "green",
                        height: "60%",
                        width: "100%",
                    }}
                >
                    <DialogTitle>
                        <Typography variant="h4" sx={{ color: "white" }}>
                            Are you sure you would like to delete your account?
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="h5" sx={{ color: "white" }}>
                                Toggle the switch to confirm, then press Delete
                            </Typography>
                            <Typography fontSize={12} sx={{ color: "white" }}>
                                WARNING: this action can NOT be undone
                            </Typography>
                        </DialogContentText>
                        {/* <br></br> */}
                        <Switch
                            sx={{
                                "& .MuiSwitch-switchBase": {
                                    "&.Mui-checked": {
                                        color: "red",
                                        "& + .MuiSwitch-track": {
                                            background: "red",
                                        },
                                    },
                                    "&.Mui-disabled.MuiSwitch-thumb": {
                                        color: "green",
                                    },
                                },
                                "& .MuiSwitch-thumb": {
                                    color: !checked ? "grey" : "red",
                                },
                                "& .MuiSwitch-track": {
                                    backgroundColor: "grey",
                                },
                            }}
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </DialogContent>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        // bgcolor: "blue",
                        height: "40%",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            // bgcolor: "red",
                            width: "100%",
                            height: "90%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: "#202123",
                                textAlign: "center",
                                // width: width.toString() + "%",
                                width: "48%",
                                // height: "50%",
                                height: "25%",
                                color: "white",
                                border: "2px solid red",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#202123",
                                    // width: hoverWidth,
                                    width: "50%",
                                    // height: "52%",
                                    // height: "100%",
                                },
                                marginTop: "10px",
                            }}
                            style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                            onClick={handleClose}
                        >
                            <Typography textTransform="none">Cancel</Typography>
                        </Button>

                        <Button
                            sx={{
                                width: "48%",
                                bgcolor: "red",
                                color: "white",
                                height: "25%",
                                border: "2px solid red",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#eb0000",
                                    border: "2px solid #eb0000",
                                    width: "50%",
                                },
                                "&.Mui-disabled": {
                                    bgcolor: "#270000",
                                    border: "2px solid #270000",
                                },
                                marginTop: "10px",
                            }}
                            disabled={!checked}
                            onClick={handleDeleteAccount}
                        >
                            <Typography textTransform="none">Delete</Typography>
                            <DeleteIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteModal;
