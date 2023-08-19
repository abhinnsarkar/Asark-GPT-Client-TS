import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: {
        name: string;
        email: string;
    } | null;
    isAuthenticated: boolean;
    token: string | null;
}

const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
    user: initialUser,
    isAuthenticated: !!localStorage.getItem("token"), // Initialize from local storage
    token: localStorage.getItem("token") || null, // Initialize from local storage
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            console.log("action is: ", action);
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

            // Save to local storage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },

        login: (state, action) => {
            console.log("action is: ", action);
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

            // Save to local storage
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
    },
});

export const { register, login } = authSlice.actions;
export default authSlice.reducer;
