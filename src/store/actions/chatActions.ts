import { useDispatch } from "react-redux";
import * as api from "../../api";
import { openAlert } from "../reducers/alertReducer";

export const useSendPrompt = () => {
    const dispatch = useDispatch();

    const handleSendPrompt = async ({
        promptValue,
    }: {
        promptValue: string;
    }): Promise<string> => {
        const alertData = {
            content: `Sending prompt : ${promptValue}`,
            severity: "info",
        };
        dispatch(openAlert(alertData));

        try {
            const response = await api.sendPrompt(promptValue);

            if (response.error) {
                console.error("Error:", response.exception);
                return "";
            } else {
                const responseData = response as string;
                return responseData;
            }
        } catch (error) {
            console.error("Error:", error);
            const alertData = {
                content: error,
                severity: "error",
            };
            dispatch(openAlert(alertData));
            return "";
        }
    };

    return handleSendPrompt;
};

export const getPreviousChatsAction = async () => {
    const previousChats = await api.getPreviousChats();
    return previousChats;
};

export const getPreviousChatsCount = async () => {
    const count = await api.getPreviousChatsCount();

    return count;
};
