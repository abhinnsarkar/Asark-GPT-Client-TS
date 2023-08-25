import { Token } from "@mui/icons-material";
import axios, { AxiosRequestConfig } from "axios";

export const apiClient = axios.create({
    baseURL: "https://asark-gpt-backend.onrender.com/api/prompts",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const register = async (user: object) => {
    console.log("entered api register");
    try {
        console.log("inside api register try");
        console.log(user);
        console.log(`Giving endpoint data : ${user}`);
        return await apiClient.post("/auth/register", user);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const login = async (user: object) => {
    console.log("entered api login");
    try {
        console.log("inside api login try");
        console.log(user);
        console.log(`Giving endpoint data : ${user}`);
        return await apiClient.post("/auth/login", user);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

interface PromptOptions {
    method: string;
    body: string;
    headers: {
        "Content-Type": string;
        "x-auth-token": string;
    };
}

export const sendPrompt = async (promptValue: string) => {
    console.log("entered api send prompt");

    console.log("local storage token", localStorage.getItem("token"));

    const token = localStorage.getItem("token") || "";

    console.log("token set as", token);

    const options = {
        method: "POST",
        body: JSON.stringify({
            promptValue,
        }),

        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    };

    try {
        const response = await fetch(
            // "https://asark-gpt-backend.onrender.com/api/prompts",
            "http://localhost:54321/api/prompts",
            options
        );
        const data = await response.json();

        // console.log("api postmprompt  try ", data);
        console.log("ai said in frontend", data["aiResponse"]);
        console.log("exiting");

        return data["aiResponse"];
    } catch (error) {
        console.error(error);
    }
};

// export const getPrevMessages = async () => {
//     console.log("entered api get prev messages");
//     try {
//         console.log("inside api get prev msgs try");
//         console.log("token = ", localStorage.getItem("token"));
//         const responseFromGet = await apiClient.get("/api/prompts");
//         var msgs = [];
//         for (
//             let i = 0;
//             i < Object.keys(responseFromGet.data["msgs"]).length;
//             i++
//         ) {
//             msgs.push(
//                 responseFromGet.data["msgs"][
//                     Object.keys(responseFromGet.data["msgs"])[i]
//                 ]
//             );
//         }
//         return msgs;
//     } catch (exception) {
//         return {
//             error: true,
//             exception,
//         };
//     }
// };

export const getMessages = async () => {
    console.log("entered api get messages");
    try {
        console.log("inside api get msg try");
        const token = localStorage.getItem("token");
        console.log("token = ", token);

        apiClient.defaults.headers["x-auth-token"] = token;

        const responseFromGet = await apiClient.get("/prompts");

        var msgs = [];
        for (
            let i = 0;
            i < Object.keys(responseFromGet.data["msgs"]).length;
            i++
        ) {
            msgs.push(
                responseFromGet.data["msgs"][
                    Object.keys(responseFromGet.data["msgs"])[i]
                ]
            );
        }
        return msgs;
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const getMessagesCount = async () => {
    console.log("entered api get messages count");
    try {
        console.log("inside api get msg count try");
        const token = localStorage.getItem("token");
        console.log("token = ", token);

        apiClient.defaults.headers["x-auth-token"] = token;

        const count = await apiClient.get("/prompts/count");

        return count;
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};
