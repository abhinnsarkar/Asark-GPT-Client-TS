import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import * as api from "../../api";
import { register, login, deleteAccount } from "../reducers/authReducer";
import { openAlert, closeAlert } from "../reducers/alertReducer";
import setAuthToken from "../../shared/utils/setAuthToken";
import store from "../store";
// import { redirect } from "react-router-dom";
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

    // const navigate = useNavigate();

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

                console.log("putting in state", stateUser);

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                console.log("Dispatching action:", register(stateUser));
                console.log("Before dispatch:", store.getState().auth);
                dispatch(register(stateUser));
                console.log("After dispatch:", store.getState().auth);

                dispatch(register(stateUser));
                setAuthToken();

                const alertData = {
                    content: "Successfully made an account",
                    severity: "success",
                };
                dispatch(openAlert(alertData));

                console.log("Successfully made an account");
                console.log("pushing to home from register");

                // navigate("/home");
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

    // const navigate = useNavigate();

    const handleLogin = async ({ user }: { user: LoginUser }) => {
        try {
            const response = await api.login(user);

            if ("error" in response && response.error) {
                console.log("caught an error at line 117");
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

                console.log("putting in state", stateUser);

                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));

                console.log("Dispatching action:", login(stateUser));
                console.log("Before dispatch:", store.getState().auth);
                dispatch(login(stateUser));
                console.log("After dispatch:", store.getState().auth);

                dispatch(login(stateUser));
                setAuthToken();

                const alertData = {
                    content: "Successfully logged in",
                    severity: "success",
                };
                dispatch(openAlert(alertData));

                console.log("Successfully logged in");
                console.log("pushing to home from login");

                // navigate("/home");
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

    // const navigate = useNavigate();

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
                // const responseData = (response as SuccessResponse).data;

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

                    console.log("Successfully deleted account");
                    console.log("pushing to welcome from home");

                    // navigate("/home");
                    // redirect("/");
                }, 2500);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return handleDeleteAccount;
};
