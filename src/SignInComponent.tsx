import React from "react";
import { useDispatch } from "react-redux";
import * as api from "./api";
import { register } from "./store/reducers/authReducer";
import { Button } from "@mui/material";

const SignInComponent = () => {
    const dispatch = useDispatch();

    // Define separate types for success and error responses
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
        exception: unknown;
    }

    // ...

    const handleRegister = async () => {
        try {
            const user = {
                name: "johndoe",
                email: "johndoe@gmail.com",
                password: "password",
            };
            const response = await api.register(user);

            if ("error" in response && response.error) {
                console.error("Error:", response.exception);
                return;
            }

            const responseData = (response as SuccessResponse).data;
            const userToPutInState: object = {
                token: responseData.token,
                user: {
                    name: responseData.user.name,
                    email: responseData.user.email,
                },
            };
            // console.log("responseData is finally", responseData);
            // console.log("putting in state", userToPutInState);
            dispatch(register(userToPutInState));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Button onClick={handleRegister}>Register</Button>
        </div>
    );
};

export default SignInComponent;
