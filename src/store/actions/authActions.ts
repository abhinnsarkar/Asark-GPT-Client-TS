import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as api from "../../api";
import { register, login } from "../reducers/authReducer";
import setAuthToken from "../../shared/utils/setAuthToken";
import store from "../store";

interface SuccessResponse {
    data: {
        token: string;
        user: {
            email: string;
            password: string;
            name: string;
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

export const useHandleRegister = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = async ({ user }: { user: RegisterUser }) => {
        try {
            const response = await api.register(user);

            if ("error" in response && response.error) {
                console.error("Error:", response.exception);
                return;
            } else {
                const responseData = (response as SuccessResponse).data;

                const user = responseData.user;
                const token = responseData.token;

                const stateUser: StateUser = {
                    token: token,
                    user: {
                        name: user.name,
                        email: user.email,
                    },
                };

                console.log("putting in state", stateUser);

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                console.log("Dispatching action:", register(stateUser));
                console.log("Before dispatch:", store.getState().auth);
                dispatch(register(stateUser));
                console.log("After dispatch:", store.getState().auth);

                dispatch(register(stateUser));
                setAuthToken();

                console.log("Successfully made an account");
                console.log("pushing to home from register");

                navigate("/home");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleRegister;
};

export const useHandleLogin = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = async ({ user }: { user: LoginUser }) => {
        try {
            const response = await api.login(user);

            if ("error" in response && response.error) {
                console.error("Error:", response.exception);
                return;
            } else {
                const responseData = (response as SuccessResponse).data;

                const user = responseData.user;
                const token = responseData.token;

                const stateUser: StateUser = {
                    token: token,
                    user: {
                        name: user.name,
                        email: user.email,
                    },
                };

                console.log("putting in state", stateUser);

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                console.log("Dispatching action:", login(stateUser));
                console.log("Before dispatch:", store.getState().auth);
                dispatch(register(stateUser));
                console.log("After dispatch:", store.getState().auth);

                dispatch(login(stateUser));
                setAuthToken();

                console.log("Successfully logged in");
                console.log("pushing to home from login");

                navigate("/home");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleLogin;
};
