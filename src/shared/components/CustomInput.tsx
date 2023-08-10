import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
});

const Input = styled("input")({
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#4c4c4e",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#4c4c4e",
        },
        "&:hover fieldset": {
            borderColor: "#4c4c4e",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#4c4c4e",
        },
        input: {
            color: "white",
        },
    },
    flexGrow: 1,
    // height: "40px",
    height: "6vh",
    border: "1px solid #4c4c4e",
    borderRadius: "10px",
    color: "white",
    background: "#202123",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
});

const CustomInput = ({
    value,
    setValue,
    placeholder,
    type,
    handleSubmit,
}: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    type: string;
    handleSubmit: () => Promise<void>;
}) => {
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <Wrapper>
            <Input
                value={value}
                onChange={handleValueChange}
                type={type}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
        </Wrapper>
    );
};

export default CustomInput;
