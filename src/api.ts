import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:54321/api",
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
