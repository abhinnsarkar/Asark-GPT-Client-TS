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

            // if ("error" in response && response.error) {
            if (response.error) {
                console.error("Error:", response.exception);
                return ""; // Return an empty string or handle the error case appropriately
            } else {
                const responseData = response as string;
                console.log("aiSaid in CHAT ACTIONS", responseData);
                console.log("in CHAT ACTIONS", typeof responseData);
                // return responseData.aiResponse; // Return the AI response string
                return responseData; // Return the AI response string
            }
        } catch (error) {
            console.error("Error:", error);
            return ""; // Return an empty string or handle the error case appropriately
        }
    };

    return handleSendPrompt;
};

export const getPrevMessages = async () => {
    console.log("in the api actions for get prev msgs");
    const prevMessages = await api.getMessages();
    console.log("chat actions said prev messages", prevMessages);
    console.log("chat says theyre of type", Object.keys(prevMessages));
    return prevMessages;
};

type ApiResponse = {
    data: {
        count: number;
    };
    status: number;
    statusText: string;
    headers: any; // You might want to create a more specific type for headers
    config: any; // You might want to create a more specific type for config
    request: XMLHttpRequest; // You might want to create a more specific type for request
};

export const getMessageCount = async () => {
    console.log("in the api actions for get prev msgs coount");
    const count = (await api.getMessagesCount()) as ApiResponse;

    // console.log("chat actions said prev messages", prevMessages);
    // console.log("chat says theyre of type", Object.keys(prevMessages));
    return count.data.count;
};
