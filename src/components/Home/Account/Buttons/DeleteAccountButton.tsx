import React from "react";
// import { AccountButton } from "./AccountButton";
// import DeleteAccountModal from "./DeleteAccountModal";
import DeleteButton from "./Delete/DeleteButton";

const DeleteAccountButton = ({ verticalPhone }: { verticalPhone: boolean }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <DeleteButton verticalPhone={verticalPhone} />
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
