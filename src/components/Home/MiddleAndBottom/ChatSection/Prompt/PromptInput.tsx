import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    styled,
} from "@mui/material";
import LoadingModal from "../../../../../shared/components/LoadingModal";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

import AnswerModal from "./AnswerModal";
import { openAlert } from "../../../../../store/reducers/alertReducer";
import { useDispatch } from "react-redux";
import { useSendPrompt } from "../../../../../store/actions/chatActions";

type PromptInputProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};
export const PromptInput: React.FC<PromptInputProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const dispatch = useDispatch();

    const handleSendPrompt = useSendPrompt();

    const [answerOpen, setAnswerOpen] = React.useState(false);
    const handleOpenAnswer = () => setAnswerOpen(true);
    const handleCloseAnswer = () => setAnswerOpen(false);

    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const handleOpenLoading = () => setLoadingOpen(true);
    const handleCloseLoading = () => setLoadingOpen(false);

    const useCloseModal = async () => {
        // console.log("closing modal");
        setPromptValue("");
        handleCloseLoading();
        handleCloseAnswer();
        // console.log("abt to display alert");
        const alertData = {
            content: "Click the reload icon to display all messages",
            severity: "info",
        };
        dispatch(openAlert(alertData));
    };

    const [promptValue, setPromptValue] = useState("");

    const [aiValue, setAiValue] = useState("");
    const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPromptValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSend();
        }
    };

    const getResponse = async (): Promise<string> => {
        const answerToReturn = await handleSendPrompt({ promptValue });
        // console.log("answerToReturn", answerToReturn);
        return answerToReturn;
    };

    const handleSend = async () => {
        handleOpenLoading();
        setTimeout(function () {
            const alertData = {
                content: "Please give some time for ai to generate response",
                severity: "info",
            };
            dispatch(openAlert(alertData));
        }, 2000);
        // console.log("prompt is : ", promptValue);
        const answer = await getResponse();

        // console.log("answer is ", answer);
        setAiValue(answer);
        handleOpenAnswer();
    };

    const CssTextField = styled(TextField)({
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#32c4a7",
            },

            "&.Mui-focused fieldset": {
                borderColor: "#32c4a7",
            },
            input: {
                color: "white",
            },
        },
    });
    const labelStyle = {
        color: "white",
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "10%",
            }}
        >
            <CssTextField
                label="Prompt..."
                value={promptValue}
                onChange={handlePromptChange}
                onKeyDown={handleKeyDown}
                autoFocus={true}
                type="text"
                InputLabelProps={{
                    style: labelStyle,
                }}
                sx={{
                    borderWidth: "2px",
                    marginTop: "1%",
                    height: "100%",
                    width: "100%",
                    ".MuiOutlinedInput-root": {
                        borderRadius: "10px",
                    },
                }}
                key="prompt"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                color="primary"
                                edge="end"
                                sx={{
                                    "&:hover": {
                                        bgcolor: "#32c4a7",
                                    },
                                    color: "white",
                                    marginRight: "0.25em",
                                }}
                                onClick={handleSend}
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <AnswerModal
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                open={answerOpen}
                handleClose={useCloseModal}
                user={promptValue}
                ai={aiValue}
            />
            <LoadingModal
                horizontalLaptop={horizontalLaptop}
                verticalPhone={verticalPhone}
                horizontalPhone={horizontalPhone}
                open={loadingOpen}
            />
        </Box>
    );
};

export default PromptInput;
