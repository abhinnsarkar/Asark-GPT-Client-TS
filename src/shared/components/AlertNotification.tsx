import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { closeAlert } from "../../store/reducers/alertReducer";
import { RootState } from "../../store/store";

interface AlertNotificationProps {
    closeAlert: typeof closeAlert;
}

type AlertSeverity = "success" | "error" | "info" | "warning";

const AlertNotification: React.FC<AlertNotificationProps> = ({
    closeAlert,
}) => {
    const alert = useSelector((state: RootState) => state.alert.alert);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAlert()); // Dispatch the closeAlert action
    };

    const severity: AlertSeverity = (alert.severity as AlertSeverity) || "info"; // Default to 'info' if severity is missing or invalid

    return alert ? (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={alert.visible}
            onClose={handleClose}
            autoHideDuration={2000}
        >
            <Alert
                style={{
                    boxShadow: "none",
                }}
                severity={severity}
                variant="filled"
            >
                {alert.content}
            </Alert>
        </Snackbar>
    ) : (
        <></>
    );
};

export default AlertNotification;
