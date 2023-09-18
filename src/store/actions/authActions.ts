import { useDispatch } from "react-redux";
import * as api from "../../api";
import { register, login, deleteAccount } from "../reducers/authReducer";
import { openAlert } from "../reducers/alertReducer";
import setAuthToken from "../../shared/utils/setAuthToken";

import { redirect } from "react-router";
import logout from "../../shared/utils/logout";

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

export const useHandleRegister = () => {
    const dispatch = useDispatch();

    const handleRegister = async ({ user }: { user: RegisterUser }) => {
        try {
            const response = await api.register(user);

            if ("error" in response && response.error) {
                const errorRes = response as ErrorResponse;

                console.error("Error:", errorRes.exception);
                const alertData = {
                    content: errorRes.exception.response.data.msg,
                    severity: "error",
                };
                dispatch(openAlert(alertData));
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

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                dispatch(register(stateUser));

                dispatch(register(stateUser));
                setAuthToken();

                const alertData = {
                    content: "Successfully made an account",
                    severity: "success",
                };
                dispatch(openAlert(alertData));

                redirect("/home");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleRegister;
};

export const useHandleLogin = () => {
    const dispatch = useDispatch();

    const handleLogin = async ({ user }: { user: LoginUser }) => {
        try {
            const response = await api.login(user);

            if ("error" in response && response.error) {
                console.error("Error:", (response as ErrorResponse).exception);
                const alertData = {
                    content:
                        (response as ErrorResponse).exception.response.data
                            .msg ||
                        (response as ErrorResponse).exception.response.data,
                    severity: "error",
                };
                dispatch(openAlert(alertData));
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

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                dispatch(login(stateUser));

                dispatch(login(stateUser));
                setAuthToken();

                const alertData = {
                    content: "Successfully logged in",
                    severity: "success",
                };
                dispatch(openAlert(alertData));

                redirect("/home");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleLogin;
};

export const useDeleteAccount = () => {
    const dispatch = useDispatch();

    const handleDeleteAccount = async () => {
        try {
            const response = await api.deleteAccount();

            if ("error" in response && response.error) {
                console.error("Error:", (response as ErrorResponse).exception);
                const alertData = {
                    content:
                        (response as ErrorResponse).exception.response.data
                            .msg ||
                        (response as ErrorResponse).exception.response.data,
                    severity: "error",
                };
                dispatch(openAlert(alertData));
                return;
            } else {
                const alertData = {
                    content: "Successfully Deleted Account",
                    severity: "success",
                };
                dispatch(openAlert(alertData));

                setTimeout(() => {
                    logout();

                    setTimeout(() => {
                        dispatch(deleteAccount());
                    }, 2000);
                }, 2500);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleDeleteAccount;
};
