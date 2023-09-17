import axios from "axios";

export const apiClient = axios.create({
    // baseURL: "https://asark-gpt-backend.onrender.com/api",
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // baseURL: "http://localhost:54321/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

interface Chat {
    user: string;
    ai: string;
    _id: string;
}

interface getPreviousChatsResponse {
    transitional: Record<string, any>;
    adapter: any[];
    transformRequest: any[];
    transformResponse: any[];
    timeout: number;

    data: {
        chats: Chat[];
        length: number;
    };

    headers: {
        "content-length": string;
        "content-type": string;
        [headerName: string]: string;
    };

    request: XMLHttpRequest;

    status: number;
    statusText: string;
}

export const register = async (user: object) => {
    console.log("entered api register");
    try {
        console.log("inside api register try");
        console.log(user);
        console.log(`Giving endpoint data : ${user}`);
        // console.log("api is ", apiClient);
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

export const sendPrompt = async (promptValue: string) => {
    const token = localStorage.getItem("token") || "";

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
            process.env.REACT_APP_BACKEND_CHATS_URL
                ? process.env.REACT_APP_BACKEND_CHATS_URL
                : "",
            // "https://asark-gpt-backend.onrender.com/api/prompts",
            // "http://localhost:54321/api/chats",
            options
        );
        const data = await response.json();

        return data["aiResponse"];
    } catch (error) {
        console.error(error);
    }
};

export const getPreviousChats = async () => {
    try {
        const token = localStorage.getItem("token");
        apiClient.defaults.headers["x-auth-token"] = token;

        const retrievedChatsResponse = (await apiClient.get(
            "/chats"
        )) as getPreviousChatsResponse;

        const retrievedChats = retrievedChatsResponse.data.chats;

        var previousChats: any = [];
        for (
            let i = 0;
            i < Object.keys(retrievedChatsResponse.data["chats"]).length;
            i++
        ) {
            previousChats.push(retrievedChats[i]);
        }
        return previousChats;
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

type getPreviousChatsCountResponse = {
    data: {
        count: number;
    };
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request: XMLHttpRequest;
};

export const getPreviousChatsCount = async () => {
    try {
        const token = localStorage.getItem("token");
        apiClient.defaults.headers["x-auth-token"] = token;

        const previousChatsCountResponse = (await apiClient.get(
            "/chats/previous-count"
        )) as getPreviousChatsCountResponse;
        const previousChatsCount = previousChatsCountResponse.data.count;

        return previousChatsCount;
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const deleteAccount = async () => {
    try {
        const headers = {
            "x-auth-token": localStorage.getItem("token"),
        };

        return await apiClient.post("/auth/delete", headers);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};
