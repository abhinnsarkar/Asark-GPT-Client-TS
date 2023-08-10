import { apiClient } from "../../api";

const setAuthToken = () => {
    const token = localStorage.getItem("token");
    apiClient.defaults.headers["x-auth-token"] = token;
};

export default setAuthToken;
