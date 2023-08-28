import React from "react";
// import { AccountButton } from "./AccountButton";
// import DeleteAccountModal from "./DeleteAccountModal";
import DeleteButton from "./Delete/DeleteButton";

type DeleteAccountButtonProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <DeleteButton
                horizontalLaptop={horizontalLaptop}
                horizontalPhone={horizontalPhone}
                verticalPhone={verticalPhone}
            />
            {/* <DeleteAccountModal
                isLaptop={isLaptop}
                isPortrait={isPortrait}
                open={open}
                handleClose={handleClose}
            /> */}
        </>
    );
};

export default DeleteAccountButton;
