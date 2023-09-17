import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import * as api from "../../api";
import { openAlert, closeAlert } from "../reducers/alertReducer";
import store from "../store";
import { type } from "os";

// interface SuccessResponse {
//     aiResponse: string;
// }

interface ErrorResponse {
    error: boolean;
    exception: {
        response: {
            data: {
                msg: string;
            };
        };
    };
}

interface RegisterUser {
    name: string;
    email: string;
    password: string;
}

interface LoginUser {
    email: string;
    password: string;
}

interface StateUser {
    token: string;
    user: {
        email: string;
        name: string;
    };
}

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
                // console.log("aiSaid in CHAT ACTIONS", responseData);
                // console.log("in CHAT ACTIONS", typeof responseData);

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
